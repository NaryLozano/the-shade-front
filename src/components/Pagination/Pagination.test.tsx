import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Pagination from "./Pagination";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Given a Pagination component", () => {
  window.scrollTo = vi.fn().mockImplementation(() => ({}));
  describe("When it's rendered", () => {
    test("Then it should show a button with an arrow", () => {
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

      const loadMore = screen.getByRole("button", { name: "next-button" });
      expect(loadMore).toBeInTheDocument();
    });
  });
  describe("When the button next is clicked", () => {
    test("Then it should call the function nextButton", async () => {
      const nextPage = vi.fn();
      renderWithProviders(
        wrapWithRouter(
          <Pagination
            nextPage={nextPage}
            previousPage={() => ({})}
            skip={2}
            total={10}
          />
        )
      );
      const nextButton = screen.getByRole("button", { name: "next-button" });
      await userEvent.click(nextButton);

      expect(nextPage).toHaveBeenCalled();
    });
  });
  describe("When the button next is clicked", () => {
    test("Then it should call the function previousButton", async () => {
      const previousPage = vi.fn();
      renderWithProviders(
        wrapWithRouter(
          <Pagination
            nextPage={() => ({})}
            previousPage={previousPage}
            skip={6}
            total={10}
          />
        )
      );
      const nextButton = screen.getByRole("button", {
        name: "previous-button",
      });
      await userEvent.click(nextButton);

      expect(previousPage).toHaveBeenCalled();
    });
  });
});
