import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/news">News</NavLink>
    </nav>
  );
};