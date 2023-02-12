import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
 // align-items: center;
  padding: 50px;
  background-color: ${p => p.theme.colors.bgPrimary};
`;

export const MenuNav = styled.nav`
  margin: 0 0 50px 0;
`;

export const MenuItem = styled.li`
  text-align: center;

  &:not(:last-child) {
    margin: 0 0 15px 0;
  }
`;

export const MenuLink = styled(NavLink)`
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.primary};
`;


// export const ReviewsActions = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
//     justify-content: flex-start;
//   }
//   // background-color: aquamarine;
// `;