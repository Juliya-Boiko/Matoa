import { FullContainer } from "./HeaderFull.styled";
import { Logo } from "components/Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { SearchFull } from "./SearchFull/SearchFull";
import { AuthBtn } from "components/buttons/AuthBtn";
import { BasketBtn } from "components/buttons/BasketBtn";

export const HeaderFull = ({ basketHandler }) => { 
  return (
    <FullContainer>
      <Logo width={178} height={22} />
      <Navigation />
      <SearchFull />
      <AuthBtn width={24} height={24} />
      <BasketBtn basketHandler={basketHandler} width="24" height="24" />
    </FullContainer>
  );
};