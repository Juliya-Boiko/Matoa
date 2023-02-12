import { NavLink } from "react-router-dom";
import { Backdrop } from "components/common/backdrop.styled";
import { useState, useEffect } from "react";
import { AuthForm } from "components/AuthForm/AuthForm";

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
      <div style={{ backgroundColor: 'white', margin: '15px'}}>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/news">News</NavLink>
        </nav>
        <button onClick={authHandler}>Log In / Register</button>
        {isAuthShow ? <AuthForm /> : null}
      </div>
    </Backdrop>
  );
};