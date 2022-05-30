import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;

    @media (max-width: 768px){
        flex-flow: column;
        min-width: 100%;
    }
`

export const Left = styled.div`
    flex: 2;
    display: flex;
    flex-flow: column;
    margin-top: 4rem;

    span{
        color: ${props => props.theme.colors.primary};
        font-weight: 800;
    }

    @media (max-width: 768px){
        justify-content:center;
        align-items: center;
    }
`

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;

    margin-bottom: 2.3rem;

    @media (max-width: 768px){
        text-align: center;
    }
`

export const Right = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
`

export const Image = styled.div`
    background-image: url('https://assets.soyhenry.com/henry-landing/assets/microlandings/SoftwareIntro.jpg');
    background-position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    height: 25rem;
    width: 25rem;
    border-radius: 99999px;
    margin-right: 2rem;

    @media (max-width: 768px){
        margin: 0 auto;
    }
`