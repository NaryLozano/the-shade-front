import axios from "axios";
import { apiUrl } from "../user/useUser";
import { useCallback } from "react";

const useApi = () => {
  const getQueens = useCallback(async () => {
    try {
      const {
        data: { queens },
      } = await axios.get(`${apiUrl}/queens`);

      return queens;
    } catch {
      const error = new Error("Can't get Queens");
      throw error;
    }
  }, []);

  return { getQueens };
};

export default useApi;
