import styled from "styled-components";

export const Container = styled.div`
  margin: 15px;
  width: 14.5rem;
  border: 1px solid rgba(0, 0, 0, 0.089);
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.backgroundColorAlt};
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

export const Image = styled.div`
  width: 100%;
  height: 10rem;
  background: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled.h2`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
  font-size: 18px;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ImgProfile = styled.img`
  width: 2rem;
  height:2rem;
  border-radius: 9999px;
`;

export const NameProfile = styled.h2`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 500;
`;

export const DescriptionContainer = styled.div`
  min-height: 7rem;
`

export const Description = styled.h2`
  margin-left: 15px;
  margin-right: 15px;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  height: 68px;
`;

export const DivRating = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-left: 15px;
`;

export const Rating = styled.p`
  color: rgb(202, 182, 0);
  margin-bottom: 6px;
  margin-top: -2px;
  margin-left: 5px;
  font-weight: 600;
`;

export const DivPay = styled.div`
  display: flex;
  min-height: 3.5rem;
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.089);
`;

export const Staring = styled.p`
  font-size: 10px;
  color: ${props => props.theme.colors.font};
`;

export const Pay = styled.h2`
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 8px;
  font-size: 17px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.664);
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-direction: column;
`;

export const BotonPago = styled.button`
  min-width: 3rem;
  min-height: 2rem;
  margin-left: 10px;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid red;
  background-color: transparent;
  font-size: 11px;
  font-weight: 400;
  color: red;
  padding: 0px;
  cursor: pointer;
  font-family: "puppin", sans-serif;
  transition: 0.2s ease;

  &:hover {
    background-color: red;
    color: white
  }
`
export const BotonActive = styled.button`
  min-width: 3rem;
  min-height: 2rem;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid rgb(94, 255, 0);
  background-color: transparent;
  font-size: 11px;
  font-weight: 400;
  color: rgb(94, 255, 0);;
  padding: 0px;
  cursor: pointer;
  font-family: "puppin", sans-serif;
  transition: 0.2s ease;

  &:hover {
    background-color: rgb(94, 255, 0);
    color: white
  }
`

export const BotonInactive = styled.button`
  min-width: 3rem;
  min-height: 2rem;
  margin-left: 10px;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid rgba(129, 129, 129, 0.548);
  background-color: transparent;
  font-size: 11px;
  font-weight: 400;
  color: rgba(129, 129, 129, 0.548);
  padding: 0px;
  cursor: pointer;
  font-family: "puppin", sans-serif;
  transition: 0.2s ease;

  &:hover {
    background-color: rgba(129, 129, 129, 0.548);
    color: white
  }
`

export const Services = styled.h2 `
  color: rgba(0, 0, 0, 0.664);
  font-family: "puppin", sans-serif;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  margin-top: 10px;
`