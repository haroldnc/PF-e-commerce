import styled from 'styled-components';

export const Filter = styled.div `
    padding: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: block;
`

export const SelectsDiv = styled.div `
    margin-top: 2rem;
`

export const SectionFilters = styled.select `
    margin-right: 25px;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    border-radius: 50px;
    text-align: center;
    -webkit-appearance: none;

    &:hover {
        border-color: ${(props) => props.theme.colors.secondary};
        transition: 0.5s;
    }

    @media screen and (max-width: 428px) {
        margin-right: 0;
        margin-bottom: 1.5rem;
    }
`

export const SectionFilters2 = styled.select `
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 50px;
    text-align: center;
    -webkit-appearance: none;

    &:hover {
        border-color: ${(props) => props.theme.colors.secondary};
        transition: 0.5s;
    }
`