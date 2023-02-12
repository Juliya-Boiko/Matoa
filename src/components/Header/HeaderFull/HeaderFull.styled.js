import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FullContainer = styled.div`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AuthLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Taviraj',serif;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  cursor: pointer;
  color: ${p => p.theme.colors.primary};

  span {
    margin: 0 0 0 8px;
  }
`;