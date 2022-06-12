import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PostComments = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userLogged = useSelector((state) => state.userSignIn);
    const userID = userLogged.userInfo.uid;
    const { publicationId } = useParams();

    const [input, setInput] = useState({
        user: `${userID}`,
        publicationId: `${publicationId}`,
        title: "",
        score: "",
        message: ""
    });

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
    };

    return (
        <div>
            <form>
                <div>

                </div>

                <div>
                    <div>
                        <input type="text" value={input.title}></input>
                    </div>

                    <div>
                        <input type="radio" name="rating" value={input.score} id="5"><label for="5">☆</label></input>
                        <input type="radio" name="rating" value={input.score} id="4"><label for="4">☆</label></input>
                        <input type="radio" name="rating" value={input.score} id="3"><label for="3">☆</label></input>
                        <input type="radio" name="rating" value={input.score} id="2"><label for="2">☆</label></input>
                        <input type="radio" name="rating" value={input.score} id="1"><label for="1">☆</label></input>
                    </div>

                    <div class="comment-area">
                        <textarea class="form-control" placeholder="Escribe tu comentario" rows="4" value={input.message}></textarea>
                    </div>

                    <button>Publicar comentario</button>      
                </div>
            </form>
        </div>
    );
};

export default PostComments;