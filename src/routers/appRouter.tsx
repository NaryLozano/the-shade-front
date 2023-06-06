import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import LoginPage from "../pages/LoginPage/LoginPage";
import { Suspense } from "react";
import { LazyList, LazyNotFound } from "./lazyComponents/lazyComponents";
import paths from "./paths/paths";

const { login, home, root } = paths;
export const routes: RouteObject[] = [
  {
    path: root,
    element: <App />,
    children: [
      { index: true, element: <Navigate to={login} replace /> },
      { path: login, element: <LoginPage /> },
      {
        path: home,
        element: (
          <Suspense>
            <LazyList />
          </Suspense>
        ),
      },
      {
        path: paths.notFound,
        element: (
          <Suspense>
            <LazyNotFound />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
