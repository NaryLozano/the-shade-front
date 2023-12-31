import styled from "styled-components";

const ModalStyled = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: ${(prop) => prop.theme.colors.darkOpacity};
  flex-direction: column;
  color: ${(prop) => prop.theme.colors.light};
  top: 0;
  position: fixed;

  .modal {
    width: 17.813rem;
    height: 16.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(prop) => prop.theme.colors.darkOpacity};
    flex-direction: column;
    border-radius: 0.625rem;
    color: ${(prop) => prop.theme.colors.light};
    position: fixed;

    &__title {
      margin-top: 1.563rem;
      font-size: 2.188rem;
    }

    &--error {
      background: ${(prop) => prop.theme.colors.error};
      color: ${(prop) => prop.theme.colors.darkPrimary};
      font-weight: bold;
    }

    &--ok {
      background: ${(prop) => prop.theme.colors.okModal};
      color: ${(prop) => prop.theme.colors.darkPrimary};
    }

    &__content {
      padding: 1.875rem;
      font-size: 1.25rem;
      text-align: center;
    }
  }
`;
export default ModalStyled;
