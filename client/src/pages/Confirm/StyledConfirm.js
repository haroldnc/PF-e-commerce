import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 500;
  background-color: ${(props) => props.theme.colors.backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirMessageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundColorAlt};
  min-width: 30rem;
  min-height: 14.5rem;
  border-radius: 5px;
  padding: 10px;
  box-shadow: ${props => props.theme.boxShadow};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.font};
    font-weight: 500;
    font-size: 2rem;
`

export const Text = styled.p`
    text-align: center;
    font-size: 14px;
    margin-bottom: .5rem;
`

export const Button = styled.button`
    color: white;
    background-color: ${(props) => props.theme.colors.primary};
    width: 7rem;
    height: 2rem;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
`;
