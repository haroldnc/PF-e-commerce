import React from "react";
import { CardImg, CardLink, CardParent, CardTitle } from "./StyledPostCard";
import { Link } from "react-router-dom";

export default function PostDetailCard({title, img, id}){


    return(
        <>
        <CardParent>
            <Link to={'/posts/detail'}>
            <CardImg src={img}/>
            </Link>
            <CardLink to={'/posts/detail'}>
            <CardTitle>{title}</CardTitle>
            </CardLink>
        </CardParent>
        </>
    )

}