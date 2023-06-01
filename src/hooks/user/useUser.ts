import axios from "axios";
import { UserCredentials } from "../../store/user/types";

export const apiUrl = import.meta.env.VITE_APP_URL;
const useUser = () => {
  const getUserToken = async (userData: UserCredentials): Promise<string> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(`${apiUrl}/user/login`, userData);

      return token;
    } catch {
      const error = new Error("Invalid credentials");
      throw error;
    }
  };
  return { getUserToken };
};

export default useUser;
