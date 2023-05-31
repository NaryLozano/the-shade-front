import { useState } from "react";
import LoginStyled from "./LoginStyled";
import { UserCredentials } from "../../store/user/types";

interface LoginProps {
  loginSubmit: (user: UserCredentials) => void;
}
const emptyCredentials = { username: "", password: "" };
const Login = ({ loginSubmit }: LoginProps): React.ReactElement => {
  const [loginData, setLoginData] = useState(emptyCredentials);

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    loginSubmit(loginData);

    setLoginData(emptyCredentials);
  };

  const isValidInput =
    loginData.username.length > 4 && loginData.password.length > 3;

  return (
    <LoginStyled
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
      />
      <input
        type="password"
        className="login-form__password"
        id="password"
        placeholder="password"
        onChange={onChangeLogin}
      />

      <button
        type="submit"
        className="login-form__button"
        disabled={isValidInput ? false : true}
      >
        login
      </button>
    </LoginStyled>
  );
};

export default Login;
