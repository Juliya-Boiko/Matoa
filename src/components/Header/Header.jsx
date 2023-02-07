// import UserIcon from '../../images/icons/user.svg';
import SearchIcon from '../../images/icons/search.svg';
import BasketIcon from '../../images/icons/basket.svg';
import { CgMenuGridO } from "react-icons/cg";
import { Logo } from 'components/Logo/Logo';
import { useState } from "react";
import { Menu } from 'components/Menu/Menu';
import { HeaderContainer, HeaderActions, OpenMenuBtn, OpenBasketBtn, SearchForm, SearchInput, SearchBtn } from './Header.styled';
import { theme } from '../../style/theme';
import { Basket } from 'components/Basket/Basket';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const modalHandler = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const basketHandler = () => {
    setIsBasketOpen(prevState => !prevState);
  };

  return (
    <HeaderContainer>
      <HeaderActions>
        <OpenMenuBtn type="button" onClick={modalHandler}>
          <CgMenuGridO color={theme.colors.primaryAddictional} size={40} />
        </OpenMenuBtn>
        <Logo width={120} height={15} />
        <OpenBasketBtn type="button" onClick={basketHandler}>
          <img src={BasketIcon} width={30} height={30} alt="Basket icon" />
        </OpenBasketBtn>
      </HeaderActions>
      {/* <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/news">News</NavLink>
          </nav> */}
      {/* <button type="button">
        <img src={UserIcon} width={20} height={20} alt="Log in icon" />
        Log In
      </button> */}
      <SearchForm>
        <SearchInput type="text" placeholder='search...' />
        <SearchBtn type="button">
          <img src={SearchIcon} width={20} height={20} alt="Search icon" />
        </SearchBtn>
      </SearchForm>



      {isMenuOpen ? <Menu /> : null}
      {isBasketOpen? <Basket /> : null}
    </HeaderContainer>
  );
};