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
      const error = new Error("bad request to api");
      throw error;
    }
  }, []);

  return { getQueens };
};

export default useApi;
