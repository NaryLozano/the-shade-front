import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .not-found {
    &__title {
      font-size: ${(props) => props.theme.fontSizes.normal};
    }

    &__message {
      font-weight: bold;
    }
  }
`;

export default NotFoundPageStyled;
