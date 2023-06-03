import { rest } from "msw";
import { tokenMock } from "./mocks";
import { apiUrl } from "../hooks/user/useUser";
import { queensMock } from "./queensMocks";

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}/queens`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ queens: queensMock }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
  rest.get(`${apiUrl}/queens`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
