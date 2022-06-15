import styled from 'styled-components';

export const TestimonialSection = styled.div `
    padding: 3.4rem;

    .tittleTestimonial {
        margin-bottom: 1rem;
    }
`

export const TestimonialCard = styled.div `
    display: flex;
    padding: 1rem;

    @media screen and (max-width: 820px) {
        display: block;
    }
`

export const TestimonialImage = styled.img `
    max-width: 20rem;

    @media screen and (max-width: 820px) {
        max-width: 100%;
    }
`

export const TestimonialLogoImage = styled.img `
    height: 1.3rem;
    margin-left: 1rem;

    @media screen and (max-width: 400px) {
        margin-left: 0;
        margin-top: 0.4rem;
    }
`

export const TestimonialText = styled.div `
    padding: 2rem;

    @media screen and (max-width: 820px) {
        display: block;
        padding: 1rem;
    }

    @media screen and (max-width: 400px) {
        padding: 0.5rem;
    }
`

export const TestimonialName = styled.div `
    margin-bottom: 0.7rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 400px) {
        display: block;
    }
`

export const ArrowImage = styled.img `
    padding: 10px,
`