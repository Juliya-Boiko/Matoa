import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 15px 0 0 0;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    padding: 30px 0 0 0;
  }
`;