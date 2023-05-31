import { rest } from "msw";
import { tokenMock } from "./mocks";

export const handlers = [
  rest.post(`/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),
];
