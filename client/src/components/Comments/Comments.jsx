import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

const Comments = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(5);
    const indexOfLastPost = currentPage * commentsPerPage;
    const indexOfFirstPost = indexOfLastPost - commentsPerPage;
    const comments = useSelector((state) => state.comments);
    const totalPages = Math.ceil(comments.length / commentsPerPage);
    const showComments = useSelector((state) => state.comments ? state.comments.slice(indexOfFirstPost, indexOfLastPost) : false);
    /*
        Filtrar comentarios por id del usuario en el estado inicial y de ahi agarrar ese estado con los comentarios filtros
        "commentsFiltered" para usarlo aqui y que en el detalle del worker aparesca sus respectivos comentarios.
    */
    
    /*
    useEffect(() => {
        dispatch(getComments());
    }, [dispatch]);
    */

    return (
        <div>
            <h2>Comentarios</h2>

            <div>
                <p>Mostrando 1 - 5 de 40 reseñas</p>
                {
                    showComments && showComments.map((c) => (
                        <div>
                            <p>reseña</p>

                            <div>
                                <img>Imagen del User</img>
                                <h5>User Name</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Comments;