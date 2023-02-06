import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "layouts/SharedLayout";
import { Home } from "pages/Home";
import { News } from "pages/News";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        {/* <Route path="products/:id" element={<ProductDetails />} /> */}
      </Route>
    </Routes>
  );
};
