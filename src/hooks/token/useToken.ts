import jwt_decode from "jwt-decode";
import { UserTokenStructure } from "../../store/user/types";

const useToken = () => {
  const getTokenData = (token: string): UserTokenStructure => {
    const decodedToken: { sub: string; user: string } = jwt_decode(token);
    const userLoggedData = {
      id: decodedToken.sub,
      username: decodedToken.user,
      token,
    };
    return userLoggedData;
  };
  return { getTokenData };
};

export default useToken;
