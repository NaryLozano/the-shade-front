import {
  InitialUserStateMock,
  UserWithTokenMock,
  userMock,
} from "../../mocks/mocks";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given an userReducer", () => {
  describe("When it receives an empty user state and a loginUser action with an user", () => {
    test("Then it should return the new state of the user", () => {
      const expectedNewUserState = userMock;
      const currentUserState = InitialUserStateMock;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(UserWithTokenMock)
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });
});
