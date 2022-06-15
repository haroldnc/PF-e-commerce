import styled from "styled-components";

export const Container = styled.form`
  background: ${props => props.theme.colors.inputColor};
  width: 23rem;
  height: 2.8rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${props => props.theme.boxShadow};

  @media (max-width: 768px){
    margin-bottom: 3rem;
  }
`;
export const Input = styled.input`
  width: 70%;
  height: 2rem;
  background-color: transparent;
  margin-left: 1rem;
  caret-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.font}
`;
export const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.colors.primary};
  height: 100%;
  width: 5rem;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  transition: .3s ease;

  :hover{
      background-color: ${(props) => props.theme.colors.secondary};
  }
`;
