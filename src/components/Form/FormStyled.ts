import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  margin: 0 auto;
  padding: 1.875rem 0rem;
  gap: 1.25rem;

  .formulary {
    display: flex;
    flex-direction: column;

    font-weight: bold;

    &__input {
      font-size: ${(prop) => prop.theme.fontSizes.small};
      width: 17.5rem;
      height: 3.125rem;
      border-bottom: 0.063rem solid #000;
      font-weight: normal;
      padding: 0.625rem;
    }

    &__area {
      padding-top: 0.625rem;
      width: 17.5rem;
      border-bottom: 0.063rem solid ${(prop) => prop.theme.colors.darkPrimary};
      font-weight: normal;
    }
  }
`;
export default FormStyled;
