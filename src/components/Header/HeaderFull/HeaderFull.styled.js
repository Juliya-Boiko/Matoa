import styled from "styled-components";

export const FullContainer = styled.div`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;