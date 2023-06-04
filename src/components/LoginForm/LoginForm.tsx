import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserCredentials } from "../../store/user/types";

interface LoginProps {
  loginSubmit: (user: UserCredentials) => void;
}
const emptyCredentials = { username: "", password: "" };
const LoginForm = ({ loginSubmit }: LoginProps): React.ReactElement => {
  const [loginData, setLoginData] = useState(emptyCredentials);

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await loginSubmit(loginData);

    setLoginData(emptyCredentials);
  };

  const isValidInput =
    loginData.username.length > 3 && loginData.password.length > 3;

  return (
    <LoginFormStyled
      className="login-form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        type="text"
        className="login-form__user"
        id="username"
        placeholder="username"
        onChange={onChangeLogin}
        aria-label="username"
        value={loginData.username}
      />
      <input
        type="password"
        className="login-form__password"
        id="password"
        placeholder="password"
        onChange={onChangeLogin}
        value={loginData.password}
      />

      <button
        type="submit"
        className="login-form__button"
        disabled={isValidInput ? false : true}
      >
        login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
