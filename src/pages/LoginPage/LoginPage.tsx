import Login from "../../components/Login/Login";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <img
        className="logotype"
        src="./media/Logotype.svg"
        alt="The Shade of it all with drawing of Sasha Velour"
        aria-label="Logotype of The Shade of it All"
        loading="lazy"
      />
      <Login
        loginSubmit={(): void => {
          throw new Error("Function not implemented.");
        }}
      />
    </LoginPageStyled>
  );
};

export default LoginPage;
