import { lazy } from "react";

export const LazyList = lazy(() => import("../../pages/ListPage/ListPage"));
export const LazyNotFound = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);

export const LazyLogin = lazy(() => import("../../pages/LoginPage/LoginPage"));
