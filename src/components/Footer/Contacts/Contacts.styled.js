import styled from "styled-components";

export const ContactsList = styled.ul`
  margin: 0 0 20px 0;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    max-width: 500px;
  }
`;