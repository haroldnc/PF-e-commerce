import styled from 'styled-components'

export const Card = styled.div `
    margin: 15px;
    width: 300px;
    height: 348px;
    border: 1px solid rgba(0, 0, 0, 0.089);
    cursor: pointer;
    border-radius: 5px;

    &:hover{
        border: 1px solid #00a896;  
    }
`

export const Image = styled.img `
    width: 100%;    
    height: 51%;
`

export const Profile = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin: -5px 0px -2px 8px;
`

export const ImgProfile = styled.img `
    width: 10%;
    height: 10%;
    border-radius: 20px;
`

export const NameProfile = styled.p  `
    margin-left: 10px;
    font-size: 18px;
    font-family: 'puppin';
    font-weight: 800;
`
export const Description = styled.h2 `
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;
    font-size: 17px;
    font-weight: 400;
    height: 68px;
`
export const DivRating = styled.div `
    display:flex;
    flex-direction: row;
    margin-top: 5px;
    margin-left: 15px;  
`

export const Rating = styled.p `
    color: rgb(202, 182, 0);
    margin-bottom: 6px;
    margin-top: -2px;
    margin-left: 5px;
    font-weight: 600;
`

export const DivPay = styled.div `
    padding-top: -10px;
    display: flex;
    height: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    border: 1px solid rgba(0, 0, 0, 0.089);
`

export const Staring = styled.p `
    font-size: 12px;
    color: rgba(0, 0, 0, 0.253);
`

export const Pay = styled.h1 `
    margin-top: 2px;
     margin-bottom: 2px;
     margin-left:8px;
     margin-right: 15px;
    font-size: 22px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.664);
`

export const BotonPago = styled.button `
    margin-right: 68px;
    padding: 3px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.secondary};
    font-size: 12px;
    font-weight: 400;
    color: white;
    cursor: pointer;
    font-family: 'puppin', sans-serif;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
    }
`