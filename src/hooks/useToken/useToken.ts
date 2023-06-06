import jwt_decode from "jwt-decode";
import { UserDecoded } from "../../store/user/types";

const useToken = () => {
  const getTokenData = (token: string): UserDecoded => {
    const decodedToken: { sub: string; user: string } = jwt_decode(token);
    const userLoggedData = {
      id: decodedToken.sub,
      username: decodedToken.user,
    };
    return userLoggedData;
  };
  return { getTokenData };
};

export default useToken;
