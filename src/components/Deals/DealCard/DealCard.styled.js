import styled from "styled-components";

export const DealArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 0 25px 25px 25px;
  background-color: ${p => p.theme.colors.secondary};
`;

export const DealImage = styled.img`
  position: relative;
  top: -40px;
  width: 200px;
  margin-bottom: -25px;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
   width: 210px;
  }
  @media screen and (min-width: ${p => p.theme.breakPoints.desktop}) {
    width: 170px;
  } 
`;

export const DealName = styled.p`
  margin: 0 0 6px 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0.2em;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
   width: 100%;
  }
`;

export const DealDiscount = styled.p`
  margin: 0 0 6px 0;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: 12px;
  line-height: 1.5;
  color: ${p => p.theme.colors.primaryLight};
`;

export const DealOldPrice = styled.p`
  position: relative ;
  margin: 0 0 6px 0;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.2em;
  color: ${p => p.theme.colors.primaryLight};
    &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background: ${p => p.theme.colors.accentRed};
  }
`;

export const DealNewPrice = styled.p`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0.2em;
`;

export const DealBtn = styled.button`
  display: block;
  width: 100%;
  margin: 25px 0 0 0;
  padding: 8px;
  font-family: 'Taviraj',serif;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  border: none;
  outline: none;
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.accentOrange};  
  cursor: pointer;
  
  /* span {
    display: none;
    @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
      display: inline-block;
      margin: 0 0 0 13px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    margin-top: 50px;
    padding: 15px 25px;
    font-size: 20px;
  } */
`;