import styled from 'styled-components'


export const Container = styled.div`
    width: 250px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 0px 9px 8px;
    flex-wrap: wrap;
    align-content: space-around;
    align-items: flex-start;
    margin: 0 50px;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.158);
    cursor:pointer;
    background: ${props => props.theme.colors.backgroundColorAlt};
    color: ${props => props.theme.colors.font};

`

export const StyledPicture = styled.img`
    width: 100%;
    height: 230px;
    border-radius: 4px 4px 0 0;
`

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin: 3px 2px 1px;
`

export const StyledSpan = styled.span`
    margin-left: 10px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: capitalize;
    text-align: left;
    font-size: 15px
`

export const StyledName = styled.span`
    margin: 2px;
    font-size: 13px;
    font-weight: lighter;
    display: block;
    text-align: left;
    margin-left: 10px

`

export const Row = styled.div `
    width: 100%;
    display: flex;
    flex-direction:row;
    margin-top: 15px;
    text-align: center;
`
export const Column = styled.div `
    display: flex;
    flex-direction: column;
    /* text-align: rigth; */
    background-color: blue;
    text-align: center;
`