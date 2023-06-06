import {
  UiStateStruture,
  hideErrorActionCreator,
  hideLoadingActionCreator,
  showErrorActionCreator,
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

  describe("When it receives a ui state with a isError false", () => {
    test("Then it should return the new state of the Ui", () => {
      const initialUiState: UiStateStruture = { isError: false };
      const newUiState: UiStateStruture = { isError: true };

      const resultUiState = uiReducer(
        initialUiState,
        showErrorActionCreator({ isError: true })
      );

      expect(resultUiState).toStrictEqual(newUiState);
    });
  });

  describe("When it receives a ui state with a isError to true", () => {
    test("then it should return the new state of the Ui", () => {
      const initialState: UiStateStruture = { isError: true };
      const newUiState: UiStateStruture = { isError: false };

      const resultUiState = uiReducer(
        initialState,
        hideErrorActionCreator(newUiState)
      );

      expect(resultUiState).toStrictEqual(newUiState);
    });
  });
});
