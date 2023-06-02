import { useNavigate } from "react-router-dom";
import Login from "../../components/Login/Login";
import useToken from "../../hooks/token/useToken";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useUser from "../../hooks/user/useUser";
import { useAppDispatch } from "../../store";
import { UserCredentials } from "../../store/user/types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import LoginPageStyled from "./LoginPageStyled";
import paths from "../../routers/paths/paths";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const { setItemLocalStorage } = useLocalStorage();
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (user: UserCredentials) => {
    const token = await getUserToken(user);
    setItemLocalStorage("token", token);
    const userData = getTokenData(token);
    dispatch(loginUserActionCreator(userData));
    Navigate("/home", { replace: true });
    Navigate(paths.home, { replace: true });
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
