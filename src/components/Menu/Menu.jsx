import { NavLink } from "react-router-dom";
import { Backdrop } from "components/common/backdrop.styled";
import { useState } from "react";
import { AuthForm } from "components/AuthForm/AuthForm";

export const Menu = () => {
  const [isAuthShow, setIsAuthShow] = useState(false);
  const authHandler = () => {
    setIsAuthShow(prevState => !prevState);
  };

  return (
    <Backdrop>
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