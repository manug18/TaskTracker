// import { AuthenticatedRoute } from './ProtectedRoutes';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PAGE_ROUTES } from "./Routes";
import { Login } from "../pages/Login";
import { Layout } from "../components/Layout";
import { NotFound } from "../pages/NotFound";
import HomePage from "../pages/HomePage";

export function RoutesWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={PAGE_ROUTES.login} element={<Login />} />
          <Route path={PAGE_ROUTES.notFound} element={<NotFound />} />
          <Route path={PAGE_ROUTES.homePage} element={<HomePage />} />

          {/* <Route path={PAGE_ROUTES.home} element={<AuthenticatedRoute />}> */}
          {/* </Route> */}

          <Route
            path="*"
            element={<Navigate replace to={PAGE_ROUTES.notFound} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
