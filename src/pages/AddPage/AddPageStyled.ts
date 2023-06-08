import styled from "styled-components";

const AddPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .add {
    &__title {
      color: ${(prop) => prop.theme.colors.darkSecondary};
    }
  }
`;

export default AddPageStyled;
