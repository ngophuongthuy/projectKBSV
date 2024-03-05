import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "@router/router.routes";
import { MainLayout } from "@components/layout";
import { NotFoundPage } from "@pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
