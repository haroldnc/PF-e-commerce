import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import CardPublication from "../../components/CardPublication/CardPublication";


export default function SearchResults(){
    
    const queryResults = useSelector((state)=>state.queryPosts)

    
    return(
        <>
        <CardPublication pageslice={queryResults}/>
        </>
    )
}