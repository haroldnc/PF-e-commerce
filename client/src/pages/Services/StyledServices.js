import styled from 'styled-components'


export const Page = styled.main`
    height: calc(100% - 5rem);
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 6rem;
`
export const Wrapper = styled.div`
    max-width: 1100px;
    min-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 680px){
        max-width: 100%;
        min-width: 100%;
    }
`

export const NameServ = styled.h2 `
    font-family: 'Poppins', sans-serif;
    color: 01103;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width:680px){
        grid-template-columns: repeat(1, 1fr);
    }
` 