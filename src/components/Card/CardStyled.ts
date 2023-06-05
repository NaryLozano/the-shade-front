import styled from "styled-components";

const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  width: 17.5rem;
  height: 29.375rem;
  background-color: ${(props) => props.theme.colors.backgroundCard};
  border-radius: 0.813rem;
  padding: 1.25rem;
  box-shadow: ${(props) => props.theme.colors.shadow};

  h2 {
    padding-top: 0.625rem;
  }
  .card {
    &__image-button {
      width: 15rem;
      height: 12.5rem;
      border-radius: 0.813rem;
      box-shadow: none;
      background-color: transparent;
    }

    &__img {
      width: 100%;
      border-radius: 10px;
      border: ${(props) => props.theme.colors.borderPicture};
    }

    &__buttons {
      display: flex;
      justify-content: space-between;
      padding: 1.563rem 0;
      position: absolute;
      bottom: 0;
      width: 15rem;
    }

    &__details {
      font-size: ${(props) => props.theme.fontSizes.small};
      color: ${(props) => props.theme.colors.darkPrimary};
      padding: 0.313rem;
    }
  }
`;

export default CardStyled;
