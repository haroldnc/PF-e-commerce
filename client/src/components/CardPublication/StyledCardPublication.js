import styled, {css} from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Card = styled.div`
  margin: 15px;
  width: 16rem;
  border: 1px solid rgba(0, 0, 0, 0.089);
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.backgroundColorAlt};
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 51%;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: -5px 0px -2px 8px;
`;

export const ImgProfile = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 99999px;
`;

export const NameProfile = styled.p`
  margin-left: 10px;
  font-size: 18px;
  font-family: "puppin";
  font-weight: 800;
`;
export const Description = styled.h2`
  margin-left: 15px;
  margin-right: 15px;
  text-align: left;
  font-size: 17px;
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
  font-size: 12px;
  color: rgba(0, 0, 0, 0.253);
`;

export const Pay = styled.h1`
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 8px;
  font-size: 22px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.664);
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const BotonPago = styled.button`
  min-width: 5rem;
  min-height: 2rem;
  margin-left: 10px;
  padding: 3px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  font-weight: 400;
  color: white;
  padding: 5px;
  cursor: pointer;
  font-family: "puppin", sans-serif;
  transition: 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
export const HeartContainer = styled.div`
  position: absolute;
  width: 1.7rem;
  height: 1.7rem;
  z-index: 10;
  top: 0px;
  right: 5px;
  background-color: ${(props) => props.theme.colors.backgroundColorAlt};
  backdrop-filter: blur(5px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: ${(props) => props.theme.boxShadow};

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeartOutline = styled(AiOutlineHeart)`
  color: ${(props) => props.theme.colors.font};
  font-size: 1.5rem;
  font-weight: 900;
  cursor: pointer;
`;

export const HeartFill = styled(AiFillHeart)`
  color: red;
  font-size: 1.5rem;
  font-weight: 900;
  cursor: pointer;
`;
