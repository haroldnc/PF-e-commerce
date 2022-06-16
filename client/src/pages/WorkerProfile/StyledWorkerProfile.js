import styled from "styled-components";

export const Containerr = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
`

export const Wrapper = styled.div`
    min-width: 1100px;
    max-width: 1100px;

    @media(max-width: 780px) {

    min-width: 100%;
    max-width: 100%;
    }
`

export const Container = styled.div`
    display: flex;
    gap: 2rem;
    margin: 100px 0 0 0;
    width: 100%;
    text-align: center;
    background-color: ${(props) => props.theme.colors.backgroundColorAlt};
    border-radius: 5px;
    box-shadow: ${props => props.theme.boxShadow};

    @media(max-width: 680px) {
        flex-direction: column;
        gap: 0;
    }
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
    padding: 10px;

`
export const Div3 = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    margin: 50px;
    background-color: ${props => props.theme.colors.borderColor};
    height: 12.5rem;
    padding: 10px;
    border-radius: 5px;
`

export const ProfilePic = styled.img`
    border-radius: 50%;
    width: 15rem;
    height: 15rem;

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
    border-radius: 5px;
    color: white;
    padding: 5px;
    height: 2.5rem;
    cursor: pointer;
    width: 100%;
    margin: 0 0 15px;
    background-color:${(props) => props.theme.colors.primary};
    transition: .3s ease;

    &:hover{
        background-color: ${(props) => props.theme.colors.secondary};
    }
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
    width: 100%;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PostsTitle = styled.h4`
    margin: 30px 0 0 0;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media(max-width: 680px){
        grid-template-columns: repeat(1, 1fr);
    }
`