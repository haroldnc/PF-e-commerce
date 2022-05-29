import styled from "styled-components";
 
export const LogosGlobal = styled.div `
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(5, 1fr);
    padding-left: 70px;
    margin-top: 25px
`
export const LogoCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border: solid 1px transparent;
    border-radius: 100px;
    cursor: pointer;
    margin-bottom: 15px;
    transition-property: all;
    transition-duration: 1s;
     &:hover{
        border: solid 1px ${(props) => props.theme.colors.secondaryLighter};
        
        
     }
    
`
// &:hover{
//     width: 165px;
// }

export const Logo = styled.img `
    width: 50%;
    margin-top: 10px;
    margin-bottom: -10px;
`
export const NameCard = styled.h1 `
    font-size: 15px;
    margin-top: 10px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
`

export const Name = styled.h1 `
font-size: 25px;
font-family: 'Poppins', sans-serif;
font-weight: 700;
margin-left: 50px;
margin-top: 40px

`
