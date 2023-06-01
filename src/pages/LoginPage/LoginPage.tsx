import Login from "../../components/Login/Login";
import useToken from "../../hooks/token/useToken";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useUser from "../../hooks/user/useUser";
import { useAppDispatch } from "../../store";
import { UserCredentials } from "../../store/user/types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const { setItemLocalStorage } = useLocalStorage();
  const dispatch = useAppDispatch();

  const onSubmit = async (user: UserCredentials) => {
    const token = await getUserToken(user);
    setItemLocalStorage("token", token);
    const userData = getTokenData(token);

    dispatch(loginUserActionCreator(userData));
  };

  return (
    <LoginPageStyled>
      <img
        className="logotype"
        src="./media/Logotype.svg"
        alt="The Shade of it all with drawing of Sasha Velour"
        aria-label="Logotype of The Shade of it All"
      />
      <Login loginSubmit={onSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
