import { Backdrop } from "components/common/backdrop.styled";
import { useState, useEffect } from "react";
import { AuthForm } from "components/AuthForm/AuthForm";
import { MenuContainer, MenuNav, MenuItem, MenuLink } from "./Menu.styled";
import { AuthFormOpenBtn } from "components/buttons/AuthFormOpenBtn";

export const Menu = ({ closeMenu }) => {
  const [isAuthShow, setIsAuthShow] = useState(false);

  const authHandler = () => {
    setIsAuthShow(prevState => !prevState);
  };

    useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <MenuContainer>
        <MenuNav>
          <ul>
            <MenuItem>
              <MenuLink to="/" end>Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/news">News</MenuLink>
            </MenuItem>
          </ul>
        </MenuNav>
        <AuthFormOpenBtn authHandler={authHandler} />
        {isAuthShow ? <AuthForm /> : null}
      </MenuContainer>
    </Backdrop>
  );
};