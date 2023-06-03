import axios from "axios";
import { apiUrl } from "../user/useUser";

const useApi = () => {
  const getQueens = async () => {
    const {
      data: { queens },
    } = await axios.get(`${apiUrl}/queens`);

    return queens;
  };

  return { getQueens };
};

export default useApi;
