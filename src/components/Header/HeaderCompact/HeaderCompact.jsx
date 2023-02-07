import { useState } from "react";
import { MenuBtn } from 'components/buttons/MenuBtn';
import { Logo } from 'components/Logo/Logo';
import { BasketBtn } from "components/buttons/BasketBtn";
import { SearchCompact } from "./SearchCompact/SearchCompact";
import { Menu } from 'components/Menu/Menu';
import { CompactContainer, CompactMain } from "./HeaderCompact.styled";

export const HeaderCompact = ({ basketHandler }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuHandler = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  
  return (
    <CompactContainer>
      <CompactMain>
        <MenuBtn menuHandler={menuHandler} />
        <Logo width={120} height={15} />
        <BasketBtn basketHandler={basketHandler} width="30" height="30" />
      </CompactMain>
      <SearchCompact />
      {isMenuOpen ? <Menu /> : null}
    </CompactContainer>
  );
};