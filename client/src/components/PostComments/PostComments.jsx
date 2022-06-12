import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Rating } from 'react-simple-star-rating';
import { Form, Comment, CommentBody, Inputs } from './styledComments';

const PostComments = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    //const userLogged = useSelector((state) => state.userSignIn);
    //const userID = userLogged.userInfo.uid;
    //const { publicationId } = useParams();

    const [rating, setRating] = useState(0);

    const [input, setInput] = useState({
        //user: `${userID}`,
        //publicationId: `${publicationId}`,
        title: "",
        score: "",
        message: ""
    });

    const handleRating = (rate) => {
        setRating(rate);

        setInput({
            ...input,
            score: rate * 0.05
        });
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
        //dispatch(postPublish(input));
        /*
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
        history.push('/')
        */
    };

    return (
        <Comment>
            <Form onSubmit={handleSubmit}>
                <div>

                </div>

                <CommentBody>
                    <Rating onClick={handleRating} ratingValue={rating} className="stars"/>
                    <Inputs>
                        <input type="text" name='title' placeholder="Titulo" value={input.title} onChange={handleInputChange}></input>
                        <br></br>
                        <textarea name="message" placeholder="Escribe tu comentario" value={input.message} onChange={handleInputChange}></textarea>
                        <br></br>
                        <button>Publicar comentario</button>   
                    </Inputs>   
                </CommentBody>
            </Form>
        </Comment>
    );
};

export default PostComments;