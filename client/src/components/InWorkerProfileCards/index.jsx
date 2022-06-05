import React from "react";
import { CardImg, CardParent, CardTitle, CardLink } from "./styledWorkerProfileCards";
import { Link } from "react-router-dom";

export default function ProfilePostDetailCard({title, img, id}){


    return(
        <>
        <CardParent>
            <CardImg src={img}/>
            <CardLink to={`/posts/detail/${id}`}>
            <CardTitle>{title}</CardTitle>
            </CardLink>
        </CardParent>
        </>
    )

}