import styled from 'styled-components';

export const FormContainer = styled.div`
    margin: 150px;
`


export const ConfirmHire = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 5rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 400;
  color: white;
  transition: .3s ease;
  font-size: 12px;

  :hover{
      background-color: ${(props) => props.theme.colors.secondary};
  }
`;