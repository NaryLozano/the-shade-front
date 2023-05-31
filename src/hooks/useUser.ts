import axios from "axios";
import { UserCredentials } from "../store/user/types";

export const apiUrl = import.meta.env.VITE_APP_URL;
const useUser = () => {
  const getUserToken = async (userData: UserCredentials): Promise<string> => {
    const {
      data: { token },
    } = await axios.post<{ token: string }>(`${apiUrl}/login`, userData);
    return token;
  };
  return { getUserToken };
};

export default useUser;
