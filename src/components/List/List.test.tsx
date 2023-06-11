import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import List from "./List";

import { queensMock } from "../../mocks/queensMocks";

describe("Given a List component", () => {
  describe("When it's rendered ", () => {
    test("Then it should show a heading with the name of each queen", () => {
      renderWithProviders(<List />, { queens: { queens: queensMock } });

      const titleNames = screen.getAllByRole("heading", { level: 2 });

      expect(titleNames).toBeTruthy();
    });
  });
});
