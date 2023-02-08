import styled from "styled-components";

export const SectionContainer = styled.div`
  margin: 0 0 15px 0;
  @media screen and (min-width: ${p => p.theme.breakPoints.desktop}) {
    margin: 0 60px 0 0;
  }
`;