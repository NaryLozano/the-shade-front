import LoginStyled from "./LoginStyled";

const Login = (): React.ReactElement => {
  return (
    <LoginStyled className="login-form">
      <input
        type="text"
        className="login-form__user"
        id="username"
        autoComplete="off"
        placeholder="Username"
      />
      <input
        type="password"
        className="login-form__password"
        id="password"
        autoComplete="off"
        placeholder="Password"
      />
      <button className="login-form__button">login</button>
    </LoginStyled>
  );
};

export default Login;
