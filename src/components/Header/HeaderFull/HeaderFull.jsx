import { FullContainer, AuthLink } from "./HeaderFull.styled";
import { Logo } from "components/Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { SearchFull } from "./SearchFull/SearchFull";
import { BasketBtn } from "components/buttons/BasketBtn";
import UserIcon from '../../../images/icons/user.svg';

export const HeaderFull = ({ basketHandler }) => { 
  return (
    <FullContainer>
      <Logo width={178} height={22} />
      <Navigation />
      <SearchFull />
      <AuthLink to="auth">
        <img src={UserIcon} alt="Log in icon" />
        <span>Log In</span>  
      </AuthLink>
      <BasketBtn basketHandler={basketHandler} width="24" height="24" />
    </FullContainer>
  );
};