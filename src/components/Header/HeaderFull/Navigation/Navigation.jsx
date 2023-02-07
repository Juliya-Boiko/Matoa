import { NavList, NavItem, NavigationLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavigationLink to="/" end>Home</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink to="/news">News</NavigationLink>
        </NavItem>
      </NavList>
    </nav>
  );
};