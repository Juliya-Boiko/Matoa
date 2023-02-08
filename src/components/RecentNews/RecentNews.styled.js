import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NewsContainer = styled.div`
  padding: 0 0 70px 0;
`;

export const NewsCard = styled.div`
  display: flex;
  @media screen and (min-width: ${p => p.theme.breakPoints.desktop}) {
    align-items: center;
  } 
`;

export const NewsCardDate = styled.p`
  font-size: 10px;
  line-height: 2;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.primaryLight};
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 20px;
  }
`;

export const NewsCardTitle = styled.p`
  margin: 0 0 15px 0;
  font-size: 15px;
  line-height: 1.3;
  letter-spacing: 0.02em;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 36px;
  }
`;

export const NewsCardLink = styled(Link)`
  display: inline-block;
  padding: 5px 20px;
  font-family: 'Taviraj';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.accentOrange};
  outline: 2px solid ${p => p.theme.colors.accentOrange};
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    padding: 15px 47px;
  }
`;

export const NewsCardImage = styled.img`
  width: 150px;
  margin: 0 0 0 15px;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    width: 300px;
  }
  @media screen and (min-width: ${p => p.theme.breakPoints.desktop}) {
    width: 600px;
    margin: 0 0 0 45px;
  } 
`;