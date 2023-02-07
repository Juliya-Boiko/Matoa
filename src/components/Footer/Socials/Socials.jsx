import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { SocialsList, SocialItem, SocialLink } from "./Socials.styled";

export const Socials = () => {
  return (
    <SocialsList>
      <SocialItem>
        <SocialLink href=""><TiSocialFacebook size={30}/></SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href=""><AiOutlineInstagram size={30}/></SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href=""><AiOutlineTwitter size={30} /></SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href=""><AiFillYoutube size={30} /></SocialLink>
      </SocialItem>
    </SocialsList>
  );
};