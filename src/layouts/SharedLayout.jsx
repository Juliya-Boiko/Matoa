import { LayoutContainer } from "components/common/containers.styled";
import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";

export const SharedLayout = () => {
  return (
    <LayoutContainer>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </LayoutContainer>
  );
};