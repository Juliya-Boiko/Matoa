import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const PageContainer = styled.main`
  padding: 30px 0 0 0;
  flex-grow: 1;
`;

export const Container = styled.div`
  padding: 0 15px;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    width: 768px;
    margin: 0 auto;
    padding: 0;
  }
  @media screen and (min-width: ${p => p.theme.breakPoints.desktop}) {
    width: 1110px;
  } 
`;

