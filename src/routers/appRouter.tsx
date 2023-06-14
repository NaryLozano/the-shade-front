import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import {
  LazyAdd,
  LazyDetail,
  LazyList,
  LazyLogin,
  LazyNotFound,
} from "./lazyComponents/lazyComponents";
import paths from "./paths/paths";

const { login, home, add, notFound } = paths;

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={login} replace /> },
      {
        path: login,
        element: <LazyLogin />,
      },
      {
        path: home,
        element: (
          <Suspense>
            <LazyList />
          </Suspense>
        ),
      },
      {
        path: add,
        element: (
          <Suspense>
            <LazyAdd />
          </Suspense>
        ),
      },
      {
        path: `${paths.queens}/:idQueen`,
        element: (
          <Suspense>
            <LazyDetail />
          </Suspense>
        ),
      },
      {
        path: notFound,
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
