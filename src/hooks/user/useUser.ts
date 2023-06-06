import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import paths from "../../routers/paths/paths";

export const apiUrl = import.meta.env.VITE_APP_URL;

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
      const error = new Error("Invalid credentials");
      throw error;
    }
  };
  return { getUserToken };
};

export default useUser;
