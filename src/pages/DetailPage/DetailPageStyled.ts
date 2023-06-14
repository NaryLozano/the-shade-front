import styled from "styled-components";

const DetailPageStyled = styled.main`
  display: flex;
  justify-content: center;

  h2 {
    padding: 0.625rem 0;
  }

  .details {
    padding-left: 1.25rem;
    color: ${(props) => props.theme.colors.darkSecondary};
    background-color: ${(props) => props.theme.colors.backgroundCard};
    border-radius: 0.813rem;
    padding: 1.25rem;
    box-shadow: ${(props) => props.theme.colors.shadow};

    &__img {
      width: 100%;
      width: 15rem;
      height: 12.5rem;
      border-radius: 0.813rem;
      border: ${(props) => props.theme.colors.borderPicture};
    }

    &__buttons {
      display: flex;
      justify-content: space-between;
      padding-bottom: 0.3rem;
      padding-top: 1.5rem;
      width: 15rem;
    }

    &__content--name {
      padding: 0.313rem;
      color: ${(props) => props.theme.colors.darkPrimary};
    }

    &__content {
      font-size: ${(props) => props.theme.fontSizes.small};
      font-weight: bold;
      color: ${(props) => props.theme.colors.darkPrimary};
      padding: 0.313rem;
    }
  }
`;

export default DetailPageStyled;
