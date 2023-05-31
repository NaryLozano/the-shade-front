import Login from "../../components/Login/Login";
import useUser from "../../hooks/useUser";
import { UserCredentials } from "../../store/user/types";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();

  const onSubmit = async (user: UserCredentials) => {
    const token = await getUserToken(user);
    localStorage.setItem("token", token);
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
