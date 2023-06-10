import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import {
  LazyAdd,
  LazyList,
  LazyLogin,
  LazyNotFound,
} from "./lazyComponents/lazyComponents";
import paths from "./paths/paths";

const { login, home, root, add, notFound } = paths;
export const routes: RouteObject[] = [
  {
    path: root,
    element: <App />,
    children: [
      { index: true, element: <Navigate to={login} replace /> },
      {
        path: login,
        element: (
          <Suspense>
            <LazyLogin />
          </Suspense>
        ),
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
        path: notFound,
        element: (
          <Suspense>
            <LazyNotFound />
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
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
