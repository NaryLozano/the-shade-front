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
import { QueenStructure } from "../../store/queens/types";

const { messages } = modalData;

const useApi = () => {
  const { token } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  interface params {
    limit: number;
    skip: number;
    filter?: string;
    filterValue?: string;
  }
  const getQueens = useCallback(
    async ({
      limit,
      skip,
      filter,
      filterValue,
    }: params): Promise<{
      queens: QueenStructure[];
      total: number;
    }> => {
      try {
        dispatch(showLoadingActionCreator());
        let url = `${apiUrl}${paths.queens}?limit=${limit}&skip=${skip}`;
        if (filter) {
          url += `&filter=${filter}&filterValue=${filterValue}`;
        }
        const {
          data: { queens, total },
        } = await axios.get<{ queens: QueenStructure[]; total: number }>(
          `${url}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(hideLoadingActionCreator());

        return { queens, total };
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        dispatch(
          showModalActionCreator({
            modalData: {
              isSuccess: false,
              modalMessage: messages.failed,
            },
          })
        );
        throw new Error("bring back my queens has failed");
      }
    },
    [dispatch, token]
  );

  const deleteQueen = async (id: string | undefined) => {
    try {
      dispatch(showLoadingActionCreator());
      await axios.delete(`${apiUrl}${paths.queens}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

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
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator()),
        dispatch(
          showModalActionCreator({
            modalData: { isSuccess: false, modalMessage: messages.deleteFail },
          })
        );
    }
  };

  const addQueen = async (queenData: QueenStructure) => {
    try {
      dispatch(showLoadingActionCreator());
      const { data: newQueen } = await axios.post<QueenStructure>(
        `${apiUrl}${paths.queens}${paths.add}`,
        queenData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoadingActionCreator());
      return newQueen;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          modalData: {
            isSuccess: false,
            modalMessage: messages.addFail,
          },
        })
      );
    }
  };

  const loadSelectedQueen = useCallback(
    async (id: string) => {
      try {
        dispatch(showLoadingActionCreator());
        const {
          data: { queenById },
        } = await axios.get<{ queenById: QueenStructure }>(
          `${apiUrl}${paths.queens}/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        dispatch(hideLoadingActionCreator());

        return queenById;
      } catch (error) {
        dispatch(hideLoadingActionCreator()),
          dispatch(
            showModalActionCreator({
              modalData: { isSuccess: false, modalMessage: messages.failed },
            })
          );
      }
    },
    [dispatch, token]
  );

  return { addQueen, deleteQueen, getQueens, loadSelectedQueen };
};
export default useApi;
