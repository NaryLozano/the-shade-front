import { useState } from "react";
import LoginStyled from "./LoginStyled";
import { UserCredentials } from "../../store/user/types";

interface LoginProps {
  loginSubmit: (user: UserCredentials) => void;
}
const Login = ({ loginSubmit }: LoginProps): React.ReactElement => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    loginSubmit(loginData);
    setLoginData({ username: "", password: "" });
  };

  return (
    <LoginStyled className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="login-form__user"
        id="username"
        autoComplete="off"
        placeholder="Username"
        onChange={onChangeLogin}
        aria-label="username"
      />
      <input
        type="password"
        className="login-form__password"
        id="password"
        autoComplete="off"
        placeholder="Password"
        onChange={onChangeLogin}
        aria-label="password"
      />

      <button className="login-form__button">login</button>
    </LoginStyled>
  );
};

export default Login;
