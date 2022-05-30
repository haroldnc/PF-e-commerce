import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
 
export const LogosGlobal = styled.div `
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 25px;
    margin: 0 auto;
`
export const LogoCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: ${props => props.theme.colors.boxShadow};
    padding: 10px;
    width: 120px;
    height: 120px;
    border: solid 1px transparent;
    border-radius: 15px;
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
export const NameCard = styled.h2 `
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
margin: 40px 0 20px 0;

`
