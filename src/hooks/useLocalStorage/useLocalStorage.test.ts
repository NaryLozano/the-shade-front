import { expect, test } from "vitest";
import { tokenMock } from "../../mocks/mocks";
import useLocalStorage from "./useLocalStorage";
import { renderHook } from "@testing-library/react";

beforeEach(() => {
  localStorage.clear();
});
const key = "token";
const expectedToken = tokenMock;
describe("Given a setItemLocalStorage function", () => {
  describe("When it receives a key 'token' and a token", () => {
    test("Then it should set the token in the local storage", () => {
      const {
        result: {
          current: { setItemLocalStorage },
        },
      } = renderHook(() => useLocalStorage());
      setItemLocalStorage(key, tokenMock);

      expect(localStorage.getItem(key)).toBe(expectedToken);
    });
  });
});

describe("Given a getItemLocalStorage function", () => {
  describe("When its called", () => {
    test("Then it should return the token saved in local storage", () => {
      const {
        result: {
          current: { getItemLocalStorage, setItemLocalStorage },
        },
      } = renderHook(() => useLocalStorage());

      setItemLocalStorage(key, tokenMock);

      const token = getItemLocalStorage(key);

      expect(token).toBe(expectedToken);
    });
  });
});

describe("Given a deleteItemLocalStorage", () => {
  describe("When its called", () => {
    test("Then it should delete the token from local storage", () => {
      const {
        result: {
          current: { deleteItemLocalStorage, setItemLocalStorage },
        },
      } = renderHook(() => useLocalStorage());
      const expectedToken = null;

      setItemLocalStorage(key, tokenMock);
      deleteItemLocalStorage(key);

      expect(localStorage.getItem(key)).toBe(expectedToken);
    });
  });
});
