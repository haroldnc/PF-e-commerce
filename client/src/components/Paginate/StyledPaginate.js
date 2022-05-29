import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const BtnPrev = styled.button `
    font-size: 15px;
    color: grey;
    padding: 6px;
    background-color: transparent;
    border: solid 1px rgba(0, 0, 0, 0.137);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;

    ${({currentPage}) => currentPage === 1 ? `
    visibility: hidden;
    ` :`none`}
`
export const BtnNext = styled.button `
    font-size: 15px;
    color: ${(props) => props.theme.colors.primary};
    padding: 6px;
    background-color: transparent;
    border: solid 1px rgba(0, 0, 0, 0.137);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;

    ${({currentPage, numberPages}) => currentPage === numberPages.length ? `
    visibility: hidden;
    ` :`none`}
`

export const Page = styled.button `
    font-size: 15px;
    color: ${(props) => props.theme.colors.primary};
    padding: 6px 8px 6px 8px;
    background-color: transparent;
    border: solid 1px rgba(0, 0, 0, 0.137);
    cursor: pointer;

    ${({number, currentPage}) => currentPage === number ? `
    border: solid 1px #00a896;
    `: `none`
    }
`