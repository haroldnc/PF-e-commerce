import styled from 'styled-components';

export const Container = styled.main`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
    margin: 150px;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: ${props => props.theme.boxShadow};
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    gap: 1rem;

    @media (max-width: 768px){
      width: 90%;
    }

`

export const Info = styled.div`

`

export const ConfirmHire = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 9rem;
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 400;
  color: white;
  transition: .3s ease;
  font-size: 12px;
  margin: 0 auto;

  :hover{
      background-color: ${(props) => props.theme.colors.secondary};
  }
`;