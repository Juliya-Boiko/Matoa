import styled from "styled-components";

export const DealsContainer = styled.div`
  padding: 100px 0;
`;

export const DealsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
   flex-direction: row;
   flex-wrap: wrap;
  }
`;

export const DealsItem = styled.li`
  width: 100%;
  margin: 40px;

  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
   margin: 30px;
   width: calc((100% - 120px) / 2);
  }

  @media screen and (min-width: ${p => p.theme.breakPoints.desktop}) {
    width: calc((100% - 240px) / 4);
  } 
`;