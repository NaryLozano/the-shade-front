import axios from "axios";
import { apiUrl } from "../user/useUser";
import { useCallback } from "react";
import { useAppSelector } from "../../store";

const useApi = () => {
  const { token } = useAppSelector((state) => state.user);
  const getQueens = useCallback(async () => {
    try {
      const {
        data: { queens },
      } = await axios.get(`${apiUrl}/queens`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return queens;
    } catch {
      const error = new Error("Can't get Queens");
      throw error;
    }
  }, [token]);

  return { getQueens };
};

export default useApi;
