import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  margin: 0 auto;
  padding: 1.875rem 0rem;
  gap: 1.25rem;

  input {
    text-transform: uppercase;
    width: 17.5rem;
    height: 3.125rem;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
  }

  .login-form__button {
    width: 17.5rem;
    height: 3.125rem;
    border-radius: 0.625rem;
    background-color: ${(prop) => prop.theme.colors.primary};
    box-shadow: 0 0.25rem 0.25rem #00000040;
    text-transform: uppercase;
  }
  .login-form__button:disabled {
    background-color: ${(prop) => prop.theme.colors.dissabled};
  }
`;
export default LoginFormStyled;
