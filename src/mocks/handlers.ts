import { rest } from "msw";
import { tokenMock } from "./mocks";
import { apiUrl } from "../hooks/useUser/useUser";
import { queenMock, queensMock } from "./queensMocks";
import paths from "../routers/paths/paths";

export const handlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}${paths.queens}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ queens: queensMock }));
  }),

  rest.delete(`${apiUrl}${paths.queens}/${queenMock.id}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json("Queen deleted!"));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
  rest.get(`${apiUrl}${paths.queens}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(`${apiUrl}${paths.queens}/${queenMock.id}`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
