import styled from "styled-components";

export const ProductCardContent = styled.div`
  padding: 0 0 50px 0;
`;

export const ProductArticle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 25px 0;
`;

export const ProductCardImg = styled.img`
  width: 100px;
  margin: 0 15px 0 0;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    width: 350px;
    margin: 0 40px 0 0;
  }
`;

export const ProductCardTitle = styled.h1`
  margin: 0 0 10px 0;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 50px;
  }
`;

export const ProductCardPrice = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: 0.02em;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 24px;
  }
`;

export const ProductCardOldPrice = styled.p`
  display: inline-block;
  position: relative ;
  margin: 0 0 6px 0;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.2em;
  color: ${p => p.theme.colors.primaryLight};
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 20px;
  }
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

export const ProductCardNewPrice = styled.p`
  margin: 0 0 25px 0;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0.2em;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 24px;
  }
`;

export const ProductCardActions = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductCardAmountBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 0 0;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    margin: 0 40px 0 0;
  }
`;

export const ProductCardAmount = styled.span`
  margin: 0 10px;
  font-size: 20px;
  letter-spacing: 0.02em;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    margin: 0 20px;
    font-size: 30px;
  }
`;

export const ProductDecrBtn = styled.button`
  outline: 1px solid #777777;
  color: #777777;
  background-color: transparent;
  border: none;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 30px;
    padding: 0 15px;
  }
`;

export const ProductIncrBtn = styled.button`
  padding: 2px 5px;
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.accentOrange};
  border: none;
  outline: none;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 30px;
    padding: 1px 15px;
  }
`;

export const ProductCardBtn = styled.button`
  display: block;
  padding: 4px 7px;
  font-family: 'Taviraj',serif;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  border: none;
  outline: none;
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.accentOrange};
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 24px;
    padding: 4px 20px;
  }
`;

export const ProductCardDescrItem = styled.li`
  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    &:not(:last-child) {
      margin: 0 0 25px 0;
    }
  }
`;

export const ProductCardDescrTitle = styled.p`
  margin: 0 0 8px 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 24px;
  }
`;

export const ProductCardDescrText = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.primaryAddictional};
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 16px;
  }
`;