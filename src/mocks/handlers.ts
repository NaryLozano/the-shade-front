import { rest } from "msw";
import { tokenMock } from "./mocks";
import { apiUrl } from "../hooks/user/useUser";

export const handlers = [
  rest.post(`${apiUrl}/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),
];
