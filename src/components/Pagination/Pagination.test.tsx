import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Pagination from "./Pagination";

describe("Given a Pagination component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a button with the text 'LOAD MORE'", () => {
      renderWithProviders(
        wrapWithRouter(
          <Pagination
            total={10}
            nextPage={() => ({})}
            previousPage={() => ({})}
            skip={2}
          />
        )
      );

      const loadMore = screen.getByRole("button", { name: "next" });
      expect(loadMore).toBeInTheDocument();
    });
  });
});
