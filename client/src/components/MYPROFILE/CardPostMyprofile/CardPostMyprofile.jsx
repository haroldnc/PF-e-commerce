import React, {useState} from "react";
import { BotonPago,
        Container, 
        Description, 
        DivPay, 
        DivRating, 
        Image, 
        PriceContainer, 
        Rating, 
        Staring, 
        Pay, 
        Title,
        Services, 
        BotonActive,  
        Profile, 
        ImgProfile, 
        NameProfile, 
        DescriptionContainer ,
        BotonInactive
      } from "./CardPostMyprofile";
import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const CardPostMyprofile = ({ title, 
                              img,
                              description, 
                              price,idPist, 
                              rating, 
                              handleDelete, 
                              service, 
                              active, 
                              handleActivate, 
                              suscribe, 
                              posts }) => {

  const [ activate, setActivate ] = useState(active)

//   const ArrayAvg = (myArray) => {
//     let i = 0, summ = 0, ArrayLen = myArray.length;
//     while (i < ArrayLen) {
//         summ = summ + myArray[i++];
// }
//     return summ / ArrayLen;
// }
// console.log(rating)
// var promScore = ArrayAvg(rating);

const handleChange = () => {
    if(activate){
      Swal.fire({
        title: 'Estas seguro?',
        text: "Tu publicación se desactivará",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Desactivar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Publicación desactivada correctamente!',
            'Tu publicación no será visible',
            'success'
          )
          handleActivate({
            active: false
          } ,idPist)
          setActivate(false)
        }
    })
    }else{
      if(suscribe === "Standard" && posts.filter( p => p.active === true).length < 3){
        console.log('los post',posts.filter( p => p.active === true).length)
        console.log('plan',suscribe)
        Swal.fire({
          title: 'Estas seguro?',
          text: "Tu publicación se activará",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Activar!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Publicación activada correctamente!',
              'Tu publicación ahora será visible',
              'success'
            )
            handleActivate({
              active: true
            } ,idPist)
            setActivate(true)
          }
      })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'No puedes activar',
          text: 'Tienes 3 publicaciones activas, cambiate a Premium y no tendras problemas!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }


    

    }
}

  return (
    <Container>
      <Image img={img} />
            {/* <Profile>
              <ImgProfile src={profile_img} />
              <NameProfile>{fullName}</NameProfile>
            </Profile> */}
      <Services>{service}</Services>
      <Title>{title}</Title>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <DivRating>
        <IconContext.Provider value={{ color: "rgb(202, 182, 0)" }}>
          <div>
            <IoIosStar />
          </div>
        </IconContext.Provider>

        <Rating>{rating}</Rating>
        
      </DivRating>
      <DivPay>
        <BotonPago onClick={() => handleDelete(idPist)}>Eliminar</BotonPago>
            { activate ?
              <BotonActive onClick={handleChange}>Activa</BotonActive>
              : <BotonInactive onClick={handleChange}>Inactiva</BotonInactive>
            }
        <PriceContainer>
          <Staring>COMIENZA EN</Staring>
          <Pay>US${price}</Pay>
        </PriceContainer>
      </DivPay>
    </Container>
  );
};

export default CardPostMyprofile;