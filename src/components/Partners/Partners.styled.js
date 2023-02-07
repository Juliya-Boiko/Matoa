import styled from "styled-components";
import { keyframes } from 'styled-components'

const scrollX = keyframes`
 0% { transform: translateX(0) }
 100% { transform: translateX(calc(-100% - calc(clamp(10rem, 1rem + 40vmin, 30rem) / 14))) }
`;

export const PartnersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.bgAddictional};
  overflow: hidden;
`;

export const PartnersGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 100%;
  animation: ${scrollX} 60s linear infinite;
`;

export const PartnersList = styled.ul`
  display: flex;
`;

export const PartnersItem = styled.div`
  margin: 0 15px;
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
`;