import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`
export const Wrapper = styled.div`
    max-width: 1100px;
    min-width: 1100px;

    @media (max-width:680px){
        max-width: 90%;
    min-width: 90%;
    }
`