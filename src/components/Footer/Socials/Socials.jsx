import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { SocialsList, SocialItem, SocialLink } from "./Socials.styled";

export const Socials = () => {
  return (
    <SocialsList>
      <SocialItem>
        <SocialLink href="https://www.facebook.com/"><TiSocialFacebook size={30}/></SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://www.instagram.com/accounts/login/"><AiOutlineInstagram size={30}/></SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://twitter.com/"><AiOutlineTwitter size={30} /></SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://www.youtube.com/"><AiFillYoutube size={30} /></SocialLink>
      </SocialItem>
    </SocialsList>
  );
};