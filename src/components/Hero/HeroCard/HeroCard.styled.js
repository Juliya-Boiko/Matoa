import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeroCardContainer = styled.article`
  display: flex;
  align-items: flex-start;
  /* background-color: aquamarine; */
`;

export const HeroCardImg = styled.img`
  position: relative;
  width: 30%;
  top: 30px;
  margin: 0 16px 0 0;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    top: 110px;
    width: 325px;
    margin: 0 40px 0 0;
  }
`;

export const HeroCardTitle = styled.p`
  position: relative;
  margin: 0 0 16px 0;
  text-transform: uppercase;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    display: block;
    width: 50%;
    height: 1px;
    background: ${p => p.theme.colors.primary};
  }
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    max-width: 413px;
    font-size: 60px;
    margin: 0 0 32px 0;
  }
`;

export const HeroCardText = styled.p`
  margin: 0 0 8px 0;
  font-size: 8px;
  line-height: 1.2;
  letter-spacing: 0.03em;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    max-width: 530px;
    font-size: 16px;
  }
`;

export const HeroCardLink = styled(Link)`
  position: relative;
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.primary};
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background: ${p => p.theme.colors.primary};
  }
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
   font-size: 16px;
  }
`;