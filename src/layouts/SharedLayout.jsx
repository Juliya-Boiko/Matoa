import { Outlet, NavLink } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/news">News</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};