import styled from "styled-components";

export const ReviewArticle = styled.div`
  display: flex;
  align-items:center;
  margin: 0 0 15px 0;
`;

export const ReviewCardPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 15px 0 0;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    border-radius: 0;
    width: 300px;
    height: auto;
    margin: 0 80px 0 0;
  }
`;

export const ReviewCardText = styled.p`
  margin: 0 0 15px 0;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: 0.03em;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 16px;
  }
`;

export const ReviewCardName = styled.p`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.03em;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 24px;
  }
`;

export const ReviewCardDate = styled.p`
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: 10px;
  line-height: 2;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.primaryLight};
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: 16px;
  }
`;
