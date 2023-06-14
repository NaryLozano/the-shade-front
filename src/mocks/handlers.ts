import { rest } from "msw";
import { tokenMock } from "./mocks";
import { apiUrl } from "../hooks/useUser/useUser";
import { queenMock, queensMock, season1QueensMock } from "./queensMocks";
import paths from "../routers/paths/paths";

export const handlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}${paths.queens}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ queens: queensMock, total: queensMock.length })
    );
  }),

  rest.delete(`${apiUrl}${paths.queens}/:idQueen`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json("Queen deleted!"));
  }),

  rest.post(`${apiUrl}${paths.queens}${paths.add}`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ queenMock }));
  }),

  rest.get(`${apiUrl}${paths.queens}/:idQueen`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ queenById: queenMock[0] }));
  }),
];

export const getHandlers = [
  rest.get(`${apiUrl}${paths.queens}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ queens: season1QueensMock, total: season1QueensMock.length })
    );
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
  rest.get(`${apiUrl}${paths.queens}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(`${apiUrl}${paths.queens}/:idQueen`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
