import styled from "styled-components";

export const CompactContainer = styled.div`
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    display: none;
  }
`;

export const CompactMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 15px 0;
`;