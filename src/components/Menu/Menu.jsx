import { Backdrop } from "components/common/backdrop.styled";
import { useEffect } from "react";
import { MenuContainer, MenuNav, MenuItem, MenuLink } from "./Menu.styled";

export const Menu = ({ closeMenu }) => {
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
              <MenuLink to="news">News</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="auth">Log In / Register</MenuLink>
            </MenuItem>
          </ul>
        </MenuNav>
      </MenuContainer>
    </Backdrop>
  );
};