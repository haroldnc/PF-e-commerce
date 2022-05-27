import React from "react";
import {IoIosStar} from 'react-icons/io'
import { IconContext } from "react-icons";

import { Card, Image, Profile, ImgProfile, NameProfile, Description, DivRating, Rating, DivPay, Staring, Pay} from './StyledCardPublication'

const CardPublication = ({Publicaciones}) => {


    return(
        <>
            {Publicaciones && Publicaciones.map(card => (
                    <Card key={card.id}>
                        <Image src={card.imagen}/>
                        <Profile>
                            <ImgProfile src={card.imgProfile}/>
                            <NameProfile>{card.nameProfile}</NameProfile>
                        </Profile>
                        <Description>{card.descTrabajo}</Description>
                        <DivRating>
                            <IconContext.Provider value={{color:"rgb(202, 182, 0)"}}>
                                <div>
                                <IoIosStar/>
                                </div>
                            </IconContext.Provider>
                            
                            <Rating>{card.rating}</Rating>
                        </DivRating>
                        <DivPay>
                            <Staring>STARING AT</Staring>
                            <Pay>US${card.pay}</Pay>
                        </DivPay>
                    </Card>
                ))}
        </>
            
    )
}


export default CardPublication