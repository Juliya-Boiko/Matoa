import styled from "styled-components";

export const SectionTitle = styled.h2`
display: inline-block;
  position: relative;
  margin: 0 0 70px 0;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0.2em;
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    display: block;
    width: 50%;
    height: 1px;
    background: #000000;
  }
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 36px;
  }
`;