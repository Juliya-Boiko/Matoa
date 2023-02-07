import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin: 0 40px 0 0;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.primary};
`;