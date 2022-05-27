import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${props => props.theme.colors.backgroundColor};
        color: ${props => props.theme.colors.font}
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    button{
        border: none;
        font-family: 'Poppins', sans-serif;
    }

    input{
        border: none;
        outline: none;
    }
`