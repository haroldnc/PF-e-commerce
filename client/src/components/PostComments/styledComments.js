import styled from "styled-components";

export const Comment = styled.div`
    padding: 1rem;
    margin-top: 6rem;
`

export const Form = styled.form`
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 20rem;
    padding-right: 20rem;
`

export const CommentBody = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundColorAlt};
    border-radius: 5rem;
    box-shadow: ${(props) => props.theme.boxShadow};

    .stars {
        margin-top: 2rem;
        cursor: pointer;
    }
`

export const Inputs = styled.div`
    display: block;

    textarea {
        margin-top: 1rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1.5px solid ${(props) => props.theme.colors.primary};
        outline: none;
        width: 15rem;
        height: 10rem;
    }

    textarea:focus {
        border: 1.5px solid ${(props) => props.theme.colors.secondary};
        transition: 0.5s;
        outline:none;
    }

    input {
        margin-top: 1rem;
        border-radius: 3rem;
        border: 1.5px solid ${(props) => props.theme.colors.primary};
        padding: 1rem;
    }

    input:focus {
        border: 1.5px solid ${(props) => props.theme.colors.secondary};
        transition: 0.5s;
    }

    button {
        margin-top: 2rem;
        padding: 1rem;
        border-radius: 1rem;
        background-color: ${(props) => props.theme.colors.primary};
        color: white;
        cursor: pointer;
        margin-bottom: 2rem;
    }

    button:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        transition: 0.5s;
    }
`