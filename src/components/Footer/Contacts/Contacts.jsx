import { FooterItem, FooterLink } from "../Footer.styled";
import { ContactsList } from "./Contacts.styled";

export const Contacts = () => {
  return (
    <ContactsList>
      <FooterItem>
        <FooterLink href="tel:+02220277564"><span>Phone</span><span>022-2027-7564</span></FooterLink>
      </FooterItem>
      <FooterItem>
        <FooterLink href="tel:0811-233-8899"><span>Service Center</span><span>0811-233-8899</span></FooterLink>
      </FooterItem>
      <FooterItem>
        <FooterLink href="tel:0811-235-9988"><span>Customer Service</span><span>0811-235-9988</span></FooterLink>
      </FooterItem>
    </ContactsList>
  );
};