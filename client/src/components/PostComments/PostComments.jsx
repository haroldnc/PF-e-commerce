import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Rating } from 'react-simple-star-rating';
import { Form, Comment, CommentBody, Inputs, Errors } from './styledComments';
import { postComments, getHiringsByUserId, putHiring } from "../../store/actions/index";
import { InputImage } from '../PublishForm/styledPublishForm';

const PostComments = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userLogged = useSelector((state) => state.userSignIn);
    const {userHirings} = useSelector((state) => state);
    const userID = userLogged.userInfo.uid;
    const [errors, setErrors] = useState({ name: "" });
    const { publicationId } = useParams();
    const [rating, setRating] = useState(0);
    
    const [input, setInput] = useState({
        user: `${userID}`,
        publicationId: `${publicationId}`,
        title: "",
        score: "",
        message: ""
    });
    
    useEffect( () => {
        dispatch( getHiringsByUserId( userID ))
      },[ dispatch ])

    const handleRating = (rate) => {
        setRating(rate);

        console.log("Soy rate",rate);
        setInput({
            ...input,
            score: rate * 0.05
        });

        setErrors(validateForm({
            ...input,
            score: rate * 0.05
        }));
    }

    const handleInputChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
/*
        setErrors(validateForm({
            ...input,
            [e.target.name]: e.target.value
        }));
*/
        if (!input.score) {
            setErrors(validateForm({
                ...input,
                [e.target.name]: e.target.value,
                score: 0
            }));
        } else {
            setErrors(validateForm({
                ...input,
                score: input.score
            }));
        }
    };

    const handleSubmit = (e) => {
        if (!input.title || !input.score || !input.message) {  
            e.preventDefault()
        
            return Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error',
                text: 'Complete todos los campos',
            })
        }

        e.preventDefault();
        console.log(input)
        dispatch(putHiring({idUser:userID, idPublication:publicationId}))
        dispatch(postComments(input));
        setInput({
            user: ``,
            publicationId: ``,
            title: "",
            score: "",
            message: ""
        });
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Genial',
          text: 'Tu comentario se publico correctamente',
        })
       // history.push('/') <-- poner la ruta anterior 
    };
    
    let comentar = userHirings.map(h=>h.idPublication._id===publicationId ? true :false)
    comentar = comentar.includes(true)
    return (
        <Comment>
            <>
            {
                comentar ?
                <Form onSubmit={handleSubmit}>
                    <div>

                    </div>

                    <CommentBody>
                        <Rating onClick={handleRating} ratingValue={rating} className="stars" fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}/>
                        {errors.score && <Errors>{errors.score}</Errors>}
                        <Inputs>
                            <input type="text" name='title' placeholder="Titulo" value={input.title} onChange={handleInputChange}></input>
                            {errors.title && <Errors>{errors.title}</Errors>}
                            <br></br>
                            <textarea name="message" placeholder="Escribe tu comentario" value={input.message} onChange={handleInputChange}></textarea>
                            {errors.message && <Errors>{errors.message}</Errors>}
                            <br></br>
                            <button>Publicar comentario</button>   
                        </Inputs>   
                    </CommentBody>
                </Form>
                :
                <h1>Error</h1>
            }
            </>
        </Comment>
    );
};

export function validateForm(input) {
    let errors = {};
  
    if (!input.title) {
      errors.title = "El titulo es requerido";
    };
  
    if (!input.message) {
      errors.message = "El comentario es requerido";
    };
  
    if (input.score === 0) {
      errors.score = "La puntuacion es requerido";
    };
  
    return errors;
  };

export default PostComments;