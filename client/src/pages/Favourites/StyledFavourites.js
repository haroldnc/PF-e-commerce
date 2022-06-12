import styled from "styled-components";

export const Container = styled.main`
    height: calc(100% - 5rem);
    width: 100%;
    margin-top: 6rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`