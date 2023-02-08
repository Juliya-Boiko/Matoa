import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  padding: 20px;
  background-color: ${p => p.theme.colors.bgSecondary};
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
     padding: 50px 0;
  }
`;

export const HeroActions = styled.div`
  position: absolute;
  bottom: 0;
  right: 15px;
  transform: translateY(50%);
  display: flex;
  align-items: center;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    right: 30px;
  }
`;