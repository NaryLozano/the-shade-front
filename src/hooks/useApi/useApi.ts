import axios from "axios";
import { apiUrl } from "../user/useUser";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoadingActionCreator,
  showErrorActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import paths from "../../routers/paths/paths";

const useApi = () => {
  const { token } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const getQueens = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { queens },
      } = await axios.get(`${apiUrl}${paths.queens}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(hideLoadingActionCreator());

      return queens;
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());
      if (error) {
        dispatch(showErrorActionCreator({ isError: true }));
      }

      throw error;
    }
  }, [dispatch, token]);

  return { getQueens };
};

export default useApi;
