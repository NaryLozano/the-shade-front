import axios from "axios";
import { apiUrl } from "../user/useUser";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const useApi = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getQueens = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());
      const {
        data: { queens },
      } = await axios.get(`${apiUrl}/queens`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(hideLoadingActionCreator());
      return queens;
    } catch {
      const error = new Error("Can't get Queens");
      throw error;
    }
  }, [dispatch, token]);

  return { getQueens };
};

export default useApi;
