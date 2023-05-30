import { useState } from "react";
import LoginStyled from "./LoginStyled";

const Login = (): React.ReactElement => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };
  return (
    <LoginStyled className="login-form">
      <input
        type="text"
        className="login-form__user"
        id="username"
        autoComplete="off"
        placeholder="Username"
        onChange={onChangeLogin}
      />
      <input
        type="password"
        className="login-form__password"
        id="password"
        autoComplete="off"
        placeholder="Password"
        onChange={onChangeLogin}
      />
      <button className="login-form__button">login</button>
    </LoginStyled>
  );
};

export default Login;
