import { describe, expect, test } from "vitest";
import { tokenMock, userMockCredentials } from "../../mocks/mocks";
import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { wrapper } from "../../utils/testUtils";
import modalData from "../../data/modal/modalData";

const { invalid } = modalData.messages;

describe("Given a getUserToken", () => {
  describe("when its called with valid User credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
      const user = userMockCredentials;
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });

  describe("When it receives invalid user credentials", () => {
    test("Then it should return a 'Wrong user name or password' error", () => {
      server.resetHandlers(...errorHandlers);
      const notUser = { username: "Berts", password: "notPassword" };
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const invalidUser = async () => await getUserToken(notUser);

      expect(invalidUser).rejects.toThrowError(invalid);
    });
  });
});
