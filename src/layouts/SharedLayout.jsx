import { Outlet } from "react-router-dom";
import { Container } from "components/common/Container.styled";
import { Header } from "components/Header/Header";

export const SharedLayout = () => {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <Outlet />
    </div>
  );
};