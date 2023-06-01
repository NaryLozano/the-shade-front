import { expect } from "vitest";
import {
  InitialUserStateMock,
  UserWithTokenMock,
  userMock,
} from "../../mocks/mocks";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given an userReducer", () => {
  describe("When it receives an empty user state and a loginUser action with an user", () => {
    test("Then it should return the new state of the user", () => {
      const currentUserState = InitialUserStateMock;
      const expectedNewUserState = userMock;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(UserWithTokenMock)
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });

  describe("When it receives an state with an user and a logoutUser action", () => {
    test("Then it should return an empty state of the user ", () => {
      const currentUserState = userMock;
      const expectedEmptyUserState = InitialUserStateMock;

      const emptystate = userReducer(
        currentUserState,
        logoutUserActionCreator(InitialUserStateMock)
      );

      expect(emptystate).toStrictEqual(expectedEmptyUserState);
    });
  });
});
