import { expect, test } from "vitest";
import { tokenMock } from "../../mocks/mocks";
import useLocalStorage from "./useLocalStorage";

beforeEach(() => {
  localStorage.clear();
});
const key = "token";
const expectedToken = tokenMock;
describe("Given a setItemLocalStorage function", () => {
  describe("When it receives a key 'token' and a token", () => {
    test("Then it should set the token in the local storage", () => {
      const { setItemLocalStorage } = useLocalStorage();
      setItemLocalStorage(key, tokenMock);

      expect(localStorage.getItem("token")).toBe(expectedToken);
    });
  });
});

describe("Given a getItemLocalStorage function", () => {
  describe("When its called", () => {
    test("Then it should return the token saved in local storage", () => {
      const { getItemLocalStorage, setItemLocalStorage } = useLocalStorage();
      setItemLocalStorage(key, tokenMock);
      const token = getItemLocalStorage("token");

      expect(token).toBe(expectedToken);
    });
  });
});

describe("Given a deleteItemLocalStorage", () => {
  describe("When its called", () => {
    test("Then it should delete the token from local storage", () => {
      const { deleteItemLocalStorage, setItemLocalStorage } = useLocalStorage();
      const expectedToken = null;

      setItemLocalStorage(key, tokenMock);
      deleteItemLocalStorage(key);

      expect(localStorage.getItem(key)).toBe(expectedToken);
    });
  });
});
