import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import CardPublication from "../../components/CardPublication/CardPublication";
import { SearchFail } from "./styledSeachResults";


export default function SearchResults(){
    
    const queryResults = useSelector((state)=>state.queryPosts)
    console.log(queryResults)
    
    return(
        <> {queryResults.length ?
        <CardPublication pageslice={queryResults}/>
        :
        <SearchFail><h3>:🙁 lo sentimos no hemos encontrado ese servicio. Intenta otra busqueda</h3></SearchFail>
        }
        </>
    )
}