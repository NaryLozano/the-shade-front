import {
  UiStateStruture,
  hideLoadingActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given an uiReducer", () => {
  describe("When it receives an ui state with a isLoading false", () => {
    test("Then it should return the new state of the ui", () => {
      const initialUiState: UiStateStruture = { isLoading: false };
      const newUiState: UiStateStruture = { isLoading: true };

      const resultUiState = uiReducer(
        initialUiState,
        showLoadingActionCreator()
      );
      expect(resultUiState).toStrictEqual(newUiState);
    });
  });
  describe("When it receives a ui state with a isLoading true", () => {
    test("Then it should return the new state of the Ui", () => {
      const initialUiState: UiStateStruture = { isLoading: true };
      const newUiState: UiStateStruture = { isLoading: false };

      const resultUiState = uiReducer(
        initialUiState,
        hideLoadingActionCreator()
      );

      expect(resultUiState).toStrictEqual(newUiState);
    });
  });
});
