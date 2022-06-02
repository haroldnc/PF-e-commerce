import styled from "styled-components";

export const UploadImage = styled.div`
  border: 2px dashed ${(props) => props.theme.colors.font};
  height: 500px;
  width: 700px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:active {
    border: 2px solid ${(props) => props.theme.colors.font};
  }

  .uploadLogo {
    font-size: 100px;
  }

  .buttonImage {
    padding: 10px 25px;
    font-size: 20px;
    font-weight: 500;
    border: none;
    outline: none;
    background: ${(props) => props.theme.colors.font};
    color: #5256ad;
    border-radius: 5px;
    cursor: pointer;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
