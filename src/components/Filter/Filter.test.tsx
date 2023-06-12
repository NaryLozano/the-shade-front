import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Filter from "./Filter";

describe("Given a Filter component", () => {
  describe("When its rendered and the user selects a season 1", () => {
    test("then it should show the list of the queens of the 1st season", async () => {
      renderWithProviders(
        wrapWithRouter(
          <Filter setFilterValue={() => ({})} setSkip={() => ({})} />
        )
      );
      const select = screen.getByRole("option", { name: "season 1" });

      expect(select).toBeInTheDocument();
    });
  });
});
