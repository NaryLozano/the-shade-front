import { renderHook } from "@testing-library/react";
import { expect, test } from "vitest";
import useToken from "./useToken";
import { tokenMock, userMockDecoded } from "../../mocks/mocks";
import { UserDecoded } from "../../store/user/types";

describe("Given a getTokenData function", () => {
  describe("When it receives a token", () => {
    test("Then it should return the user's data decoded ", () => {
      const token = tokenMock;
      const expectedUser: UserDecoded = userMockDecoded;
      const {
        result: {
          current: { getTokenData },
        },
      } = renderHook(() => useToken());

      const userData = getTokenData(token);

      expect(userData).toStrictEqual(expectedUser);
    });
  });
});
