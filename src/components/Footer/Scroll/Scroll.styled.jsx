import styled from "styled-components";

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 15px 0;
  span {
    display: none;
  }
  &:hover{
    span {
      display: block;
    }

    svg {
      width: 45px;
      height: 45px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakPoints.desktop}) {
    margin: 0 60px 0 0;
  }
`;