import styled from "styled-components";

export const Container = styled.div`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    justify-content: center;
    position: absolute;
    top: 58px;
    right: 85px;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    min-width: 7rem;
    min-height: 3.5rem;
    box-shadow: ${(props) => props.theme.boxShadow};

    border-radius: 5px;
    padding: 6px;

    ul{
        font-size: 14px;
        text-align: center;
    }

    li{
        cursor: pointer;
        margin: 5px 0;
        font-weight: 500;
    }
`