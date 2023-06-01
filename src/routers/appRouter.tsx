import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import LoginPage from "../pages/LoginPage/LoginPage";
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"/login"} replace /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/home" },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
