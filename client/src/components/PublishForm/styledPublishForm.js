import styled from "styled-components";

export const PublishFormSection = styled.div`
  margin-top: 2rem;
  padding: 5rem;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 563px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  @media screen and (max-width: 454px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.backgroundColorAlt};
  border-radius: 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 1rem;
  box-shadow: ${(props) => props.theme.boxShadow};

  button {
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    transition: 0.5s;
  }
`;

export const InputImage = styled.div`
  margin-top: 2rem;
  padding: 0 25rem 0 25rem;

  h3 {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1068px) {
    padding: 0 17rem 0 17rem;
  }
  
  @media screen and (max-width: 1000px) {
    padding: 0 16rem 0 16rem;
  }

  @media screen and (max-width: 967px) {
    padding: 0 13.5rem 0 13.5rem;
  }

  @media screen and (max-width: 894px) {
    padding: 0 11.5rem 0 10.1rem;
  }

  @media screen and (max-width: 811px) {
    padding: 0 9.5rem 0 9.5rem;
  }

  @media screen and (max-width: 765px) {
    padding: 0 6.8rem 0 6.8rem;
  }

  @media screen and (max-width: 678px) {
    padding: 0 4.8rem 0 4.8rem;
  }

  @media screen and (max-width: 609px) {
    padding: 0 2.8rem 0 2.8rem;
  }

  @media screen and (max-width: 546px) {
    padding: 0 0.8rem 0 0.8rem;
  }

  @media screen and (max-width: 352px) {
    padding: 0;
  }
`;

export const InputsDivs = styled.div`
  margin-top: 2rem;

  h3 {
    margin-bottom: 1rem;
  }

  textarea {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1.5px solid ${(props) => props.theme.colors.primary};
    outline: none;
    width: 21rem;
    height: 10rem;

    @media screen and (max-width: 410px) {
      width: 17rem;
      height: 10rem;
    }
  }

  textarea:focus {
    border: 1.5px solid ${(props) => props.theme.colors.secondary};
    transition: 0.5s;
    outline:none;
  }

  input {
    border-radius: 3rem;
    border: 1.5px solid ${(props) => props.theme.colors.primary};
    padding: 1rem;
  }

  input:focus {
    border: 1.5px solid ${(props) => props.theme.colors.secondary};
    transition: 0.5s;
  }

  select {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 50px;
    text-align: center;
    -webkit-appearance: none;
    margin-left: 1rem;
    border: 1.5px solid ${(props) => props.theme.colors.primary};
    outline:none;
  }

  select:focus {
    border: 1.5px solid ${(props) => props.theme.colors.secondary};
    transition: 0.5s;
    outline:none;
  }
`;

export const UploadImage = styled.div`
  border: 2px dashed ${(props) => props.theme.colors.font};
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  &:active {
    border: 2px solid ${(props) => props.theme.colors.font};
  }

  .uploadLogo {
    font-size: 100px;
  }

  h4 {
    margin-bottom: 1rem;
  }

  input {
    margin-bottom: 1rem;
  }
`;

export const Errors = styled.p`
  color: red;
  margin-top: 1rem;
`;