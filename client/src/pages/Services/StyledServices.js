import styled from 'styled-components'


export const Page = styled.main `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`
    max-width: 1100px;
    min-width: 1100px;
`

export const NameServ = styled.h1 `
    font-family: 'Poppins', sans-serif;
    color: 01103;
`

export const Grid = styled.div `
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(4, 1fr);
`