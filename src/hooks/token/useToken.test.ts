import { renderHook } from "@testing-library/react";
import { expect, test } from "vitest";
import useToken from "./useToken";
import { tokenMock, userMockTokenData } from "../../mocks/mocks";
import { UserTokenStructure } from "../../store/user/types";

describe("Given a getTokenData function", () => {
  describe("When it receives a token", () => {
    test("Then it should return the user's data decoded and  the token", () => {
      const token = tokenMock;
      const expectedUserWithToken: UserTokenStructure = userMockTokenData;
      const {
        result: {
          current: { getTokenData },
        },
      } = renderHook(() => useToken());

      const userData = getTokenData(token);

      expect(userData).toStrictEqual(expectedUserWithToken);
    });
  });
});
