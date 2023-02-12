import styled from "styled-components";

export const ReviewContainer = styled.div`

`;

export const ReviewsActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    justify-content: flex-start;
  }
  // background-color: aquamarine;
`;