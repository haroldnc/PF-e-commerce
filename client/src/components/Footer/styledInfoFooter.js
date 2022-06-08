import styled, { css } from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content:center;

  ${({ruta}) => ruta === "admin" ? `visibility:hidden`: `none`}
`

export const InfoFooter = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  color: ${(props) => props.theme.colors.font};


  @media screen and (max-width: 660px) {
    display: block;
    justify-content: center;
    text-align: center;
  }

  .tittleInfo {
    @media screen and (max-width: 660px) {
      margin-top: 1.5rem;
    }
  }
`;

export const Wrapper = styled.div`
  min-width: 1100px;
  border-top: 1px solid ${props => props.theme.colors.borderColor}; 
`;

export const LastInfoFooter = styled.div`
margin: 1rem 0;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${(props) => props.theme.colors.font};

  @media screen and (max-width: 660px) {
    display: block;
    justify-content: center;
    text-align: center;
  }

  ${(props) =>
    props.useFlex &&
    css`
      display: flex;
      align-items: center;
      text-align: center;
    `}

  .socials {
    margin: 0.5rem;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
      transition: 0.5s;
    }
  }

  #footerLogo {
    cursor: pointer;
    color: ${(props) => props.theme.colors.font};

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
      transition: 0.5s;
    }
  }

  .footerCopyright {
    padding: 1rem;
  }
`;

export const CategoriesList = styled.ul`
  list-style: none;
`;

export const AboutList = styled.ul`
  list-style: none;
`;

export const ComunityList = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  padding-top: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.font};

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    transition: 0.5s;
  }

  @media screen and (max-width: 660px) {
  }
`;

export const tittleInfoFooter = styled.h4`
  @media screen and (max-width: 660px) {
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
