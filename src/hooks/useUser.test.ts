import { expect, test } from "vitest";
import { tokenMock } from "../mocks/mocks";
import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { userMockCredentials } from "../mocks/mocks";

describe("Given a getUserToken", () => {
  describe("when its called with valid User credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
      const user = userMockCredentials;
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });
});
