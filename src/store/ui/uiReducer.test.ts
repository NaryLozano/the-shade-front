import {
  UiStateStruture,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given an uiReducer", () => {
  describe("When it receives an ui state with a is loading false", () => {
    test("Then it should return the new state of the user", () => {
      const initialUiState: UiStateStruture = { isLoading: false };
      const newUiState: UiStateStruture = { isLoading: true };

      const neUiState = uiReducer(initialUiState, showLoadingActionCreator());
      expect(neUiState).toStrictEqual(newUiState);
    });
  });
});
