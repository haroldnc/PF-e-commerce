import styled from "styled-components";

export const ImgArrow = styled.img`
  padding: 10px;
`;

export const WorkerDiv = styled.div`
  padding-bottom: 50px;
  margin-top: 50px;
`;

export const TitleCarousel = styled.h2`
  margin-bottom: 30px;
`;

export const Container = styled.div`
  width: 322px;
  display: flex;
  flex-direction: column;
  padding: 0px 9px 8px;
  flex-wrap: wrap;
  align-content: space-around;
  align-items: flex-start;
  margin: 25px;
  box-shadow: ${props => props.theme.boxShadow};
  text-align: center;
`;
export const StyledPicture = styled.img`
  width: 304px;
  height: 237px;
  border-radius: 4px 4px 0 0;
`;

export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin: 3px 2px 1px;
`;
