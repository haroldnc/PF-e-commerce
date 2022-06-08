import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin: 100px 100px 25px ;
    width: 80%;
    border: solid 1px black;
    text-align: center;
    /* background-color: ${(props) => props.theme.colors.primary}; */
    border-radius: 15px;
    padding: 25px;
`

export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    margin: 50px;
`
export const Div2 = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    margin: 50px;
    display: flex;
    flex-direction: column;
    text-align: left;

`
export const Div3 = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    margin: 50px;
`

export const ProfilePic = styled.img`
    border-radius: 50%;
    width: 70%;

`

export const Price = styled.span`
    font-weight: bold;
`

export const DescriptionArea = styled.article`
    margin-top: 5px;
    text-align:left;
    line-height: 1.5rem;
`

export const HireButton = styled.button`
    border: 2px solid black;
    border-radius: 5px;
    color: white;
    letter-spacing: 2px;
    padding: 5px;
    cursor: pointer;
    width: 100%;
    margin: 0 0 15px;
    background-color:${(props) => props.theme.colors.primary};
`

export const profesionalInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;


`

export const SubTitle = styled.h3`
    margin: 0 0 10px ;
`

export const ProfileCardsContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    border: solid 1px black;
    border-radius: 15px;
    margin: 25px 100px 50px ;
    padding: 10px;
`

export const PostsTitle = styled.h4`
    width: 40%;
    margin: auto;
`