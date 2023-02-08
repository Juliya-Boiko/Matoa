import styled from "styled-components";

export const ReviewArticle = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: center;
`;

export const ReviewCardText = styled.p`
  margin: 0 0 15px 0;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: 0.03em;
`;

export const ReviewCardName = styled.p`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;

export const ReviewCardDate = styled.p`
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: 10px;
  line-height: 2;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.primaryLight};
`;
