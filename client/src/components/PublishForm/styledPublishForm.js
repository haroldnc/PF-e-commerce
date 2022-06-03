import styled from "styled-components";

export const PublishFormSection = styled.div`
  margin-top: 2rem;
  padding: 5rem;
  justify-content: center;
  text-align: center;
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