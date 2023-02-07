import { FooterTitle } from "../Footer.styled";
import { SectionContainer } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <FooterTitle>{title}</FooterTitle>
      {children}
    </SectionContainer>
  );
}