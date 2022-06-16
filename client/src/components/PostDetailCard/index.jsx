import React from "react";
import { CardImg, CardLink, CardParent, CardTitle, ImageContainer } from "./StyledPostCard";
import { Link } from "react-router-dom";

export default function PostDetailCard({title, img, id}){

    return(
        <>
        <CardParent>
            <Link to={`/posts/detail/${id}`}>
            </Link>
            <CardImg src={img}/>      
            <CardLink to={`/posts/detail/${id}`}>
            <CardTitle>{title}</CardTitle>
            </CardLink>
        </CardParent>
        </>
    )

}