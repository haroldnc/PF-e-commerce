import React from 'react';
// import ArrowL from '../../img/arrowL.png'
// import ArrowR from '../../img/arrowR.png'
import { Container, BtnPrev, BtnNext, Page } from './StyledPaginate'

const Paginate = ({pages, numberPages,currentPage, prevPage, nextPage}) =>{

    
   let prev = 0
   let next = 0
   if(currentPage === 1){
        prev = 1
        next = 3
   }else if(currentPage === numberPages.length){
       prev = currentPage -2
       next = currentPage 
   }else{
       prev= currentPage -1
       next= currentPage +1
   }
    
    return (
        <Container>
            <BtnPrev onClick={() => prevPage()} currentPage={currentPage}> 
                Previus
            </BtnPrev>
            {/* <img src={ArrowL} alt="prev" onClick={() => prevPage() }  className={ currentPage === 1?'flechas_hidden':'flechas'  }/> */}
            {numberPages && numberPages.map(number => {
                if(number >= prev && number <= next){
                    return(
                        <div  key={number}>
                            <Page  onClick={() => pages(number)} number={number} currentPage={currentPage} >{number}</Page>
                        </div>
                    )
                }
            })}
            {/* <img src={ArrowR} alt="next" onClick={() => nextPage() }  className={ currentPage === numberPages.length?'flechas_hidden':'flechas'  } /> */}
            <BtnNext onClick={() => nextPage() } currentPage={currentPage} numberPages={numberPages}>
                Next
            </BtnNext>
        </Container>
    )
}

export default Paginate