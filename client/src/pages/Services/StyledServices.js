import styled from 'styled-components'


export const Page = styled.main`
    height: calc(100% - 5rem);
    width: 100%;
    margin-top: 6rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
`
export const Wrapper = styled.div`
    max-width: 1100px;
    min-width: 1100px;
`

export const NameServ = styled.h2 `
    font-family: 'Poppins', sans-serif;
    color: 01103;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
` 