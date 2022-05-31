import styled from 'styled-components';

export const PresentationSection = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 100px
`

export const PresentationParagraphTittle = styled.div `
    display: flex;
    align-items: center;

    .check {
        margin-right: 0.5rem;
    }
`

export const PresentationText = styled.div `
    width: 30rem;

    @media screen and (max-width: 660px) {
        width: 100%;
        padding: 0.2rem;
    }
`

export const PresentationParagraph = styled.div `
    margin-top: 1rem;
`

export const PresentationImage = styled.img `
    max-width: 550px;

    @media screen and (max-width: 1093px) {
        margin-top: 2rem;
    }

    @media screen and (max-width: 660px) {
        margin-top: 2rem;
        width: 100%;
        display: block;
    }
`