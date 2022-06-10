import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import CardPublication from "../../components/CardPublication/CardPublication";
import { Grid, NameServ, Page, Wrapper } from "../Services/StyledServices";
import { SearchFail } from "./styledSeachResults";


export default function SearchResults(){
    
    const queryResults = useSelector((state)=>state.queryPosts)
    console.log(queryResults)
    
    return(
        <> {queryResults.length ?
        <Page>
            <Wrapper>
            <NameServ>Resultados de tu búsqueda</NameServ>    
            <Grid>
            <CardPublication pageslice={queryResults}/>
            </Grid>    
            </Wrapper>
        </Page>
        :
        <SearchFail><h3>🙁 lo sentimos no hemos encontrado ese servicio. Intenta otra busqueda</h3></SearchFail>
        }
        </>
    )
}