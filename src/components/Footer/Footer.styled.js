import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 30px 0;
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.accentOrange};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FooterTitle = styled.p`
  position: relative;
  margin: 0 0 10px 0;
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-size: 24px;
  line-height: 2;
  letter-spacing: 0.2em;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 50%;
    height: 1px;
    background: #FFFFFF;
  }
`;

export const FooterItem = styled.li`
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.03em;
  font-style: normal;
  &:not(:last-child) {
    margin: 0 0 5px 0;
  }
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: inherit;
`;