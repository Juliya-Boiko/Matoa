import { Container } from "components/common/containers.styled";
import { FooterContainer, FooterContent } from "./Footer.styled";
import { Scroll } from "components/Footer/Scroll/Scroll";
import { Socials } from "./Socials/Socials";
import { Contacts } from "./Contacts/Contacts";
import { Address } from "./Address/Address";
import { OfficeHour } from "./OfficeHour/OfficeHour";
import { Section } from "./Section/Section";

export const Footer = () => {
  return ( 
    <FooterContainer>
      <Container>
        <FooterContent>
          
          <Scroll />

          <Section title="Get in touch">
            <Contacts />
            <Socials />
          </Section>

          <Section title="Address">
            <Address />
          </Section>

          <Section title="Office Hour">
            <OfficeHour />
          </Section>

        </FooterContent>
      </Container>
    </FooterContainer>
  );
};