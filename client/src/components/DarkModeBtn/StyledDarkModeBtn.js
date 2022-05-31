import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

export const Container = styled.div`
  position: fixed;
  width: 2.5rem;
  height: 2.5rem;
  bottom: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.backgroundColorAlt};
  box-shadow: ${(props) => props.theme.boxShadow};

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MoonIcon = styled(FaMoon)`
  font-size: 1.5rem;
  color: #010852;
  cursor: pointer;
`;
export const SunIcon = styled(FaSun)`
  font-size: 1.5rem;
  color: #ffcc00;
  cursor: pointer;
`;
