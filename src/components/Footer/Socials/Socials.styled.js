import styled from "styled-components";

export const SocialsList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const SocialItem = styled.li`
  border-radius: 50%;
  background-color: ${p => p.theme.colors.secondary};
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: ${p => p.theme.colors.accentOrange};
`;

