import {
  UiStateStruture,
  hideModalActionCreator,
  hideLoadingActionCreator,
  showModalActionCreator,
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

  describe("When it receives a ui state with a Success true", () => {
    test("Then it should return the new state of the Ui", () => {
      const initialUiState: UiStateStruture = { isSuccess: false };
      const newUiState: UiStateStruture = {
        isSuccess: true,
        feedback: true,
        modalMessage: undefined,
      };

      const resultUiState = uiReducer(
        initialUiState,
        showModalActionCreator({ isSuccess: true })
      );

      expect(resultUiState).toStrictEqual(newUiState);
    });
  });

  describe("When it receives a ui state with a success to false", () => {
    test("then it should return the new state of the Ui", () => {
      const initialState: UiStateStruture = { isSuccess: true };
      const newUiState: UiStateStruture = {
        isSuccess: false,
        feedback: false,
        modalMessage: "",
      };

      const newState = uiReducer(initialState, hideModalActionCreator());

      expect(newState).toStrictEqual(newUiState);
    });
  });
});
