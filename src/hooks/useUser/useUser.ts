import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import paths from "../../routers/paths/paths";
import modalData from "../../data/modalData";

export const apiUrl = import.meta.env.VITE_APP_URL;

const { messages } = modalData;

const useUser = () => {
  const dispatch = useAppDispatch();

  const getUserToken = async (userData: UserCredentials): Promise<string> => {
    try {
      dispatch(showLoadingActionCreator());
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}${paths.user}${paths.login}`,
        userData
      );

      dispatch(hideLoadingActionCreator());

      return token;
    } catch {
      dispatch(
        showModalActionCreator({
          isSuccess: false,
          modalMessage: messages.invalid,
        })
      );
      return messages.invalid;
    }
  };
  return { getUserToken };
};

export default useUser;
