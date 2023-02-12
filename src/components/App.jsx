import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "layouts/SharedLayout";
import { Home } from "pages/Home";
import { News } from "pages/News";
import { Details } from "pages/Details";
import { Auth } from "pages/Auth";
import { Suspense } from "react";

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="products/:id" element={<Details />} />
          <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
