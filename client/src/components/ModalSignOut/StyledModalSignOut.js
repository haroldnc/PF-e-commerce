import styled from "styled-components";

export const SignOutContainer = styled.div`
  min-width: 25rem;
  min-height: 12rem;
  background-color: ${(props) => props.theme.colors.backgroundColorAlt};
  border-radius: 5px;
  position: relative;
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 1rem;
`
export const Button = styled.button`
    cursor: pointer;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    padding: 5px;
    width: 5rem;
    height: 2rem;
    border-radius: 5px;
`
