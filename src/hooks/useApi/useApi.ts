import axios from "axios";
import { apiUrl } from "../useUser/useUser";
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
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(showErrorActionCreator({ isError: true }));

      throw error;
    }
  }, [dispatch, token]);

  return { getQueens };
};

export default useApi;
