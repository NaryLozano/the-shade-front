import axios from "axios";
import { apiUrl } from "../useUser/useUser";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoadingActionCreator,
  showModalActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import paths from "../../routers/paths/paths";
import modalData from "../../data/modal/modalData";
import { deleteQueenActionCreator } from "../../store/queens/queensSlice";
import { QueenStructure } from "../../store/queens/types";

const { messages } = modalData;

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
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          modalData: {
            isSuccess: false,
            modalMessage: messages.failed,
          },
        })
      );
    }
  }, [dispatch, token]);

  const deleteQueen = async (id: string | undefined) => {
    try {
      dispatch(showLoadingActionCreator());
      const { status } = await axios.delete(`${apiUrl}${paths.queens}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(deleteQueenActionCreator(id));

      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          modalData: {
            isSuccess: true,
            showFeedback: true,
            modalMessage: messages.deleteOk,
          },
        })
      );
      return status;
    } catch {
      dispatch(hideLoadingActionCreator()),
        dispatch(
          showModalActionCreator({
            modalData: { isSuccess: false, modalMessage: messages.deleteFail },
          })
        );
    }
  };

  const addQueen = async (
    queenData: QueenStructure
  ): Promise<QueenStructure> => {
    try {
      dispatch(showLoadingActionCreator());
      const { data: newQueen } = await axios.post<QueenStructure>(
        `${apiUrl}${paths.queens}${paths.add}`,
        queenData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(
        showModalActionCreator({
          modalData: {
            isSuccess: true,
            showFeedback: true,
            modalMessage: messages.addOk,
          },
        })
      );
      dispatch(hideLoadingActionCreator());
      return newQueen;
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          modalData: {
            isSuccess: false,
            modalMessage: messages.addFail,
          },
        })
      );
      throw messages.addFail;
    }
  };
  return { getQueens, deleteQueen, addQueen };
};

export default useApi;
