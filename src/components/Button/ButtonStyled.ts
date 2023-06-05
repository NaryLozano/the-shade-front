import styled from "styled-components";

const ButtonStyled = styled.button.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  margin-bottom: 1.875rem;

  &.light {
    width: 10.75rem;
    height: 3.125rem;
    color: ${(prop) => prop.theme.colors.darkPrimary};
    background-color: ${(prop) => prop.theme.colors.light};
    font-family: inherit;
    border-radius: 0.625rem;
    font-family: ${(prop) => prop.theme.fonts.primary};
    text-transform: uppercase;
    font-weight: bold;
  }

  &.delete {
    border-radius: 3.125rem;
    background-color: ${(prop) => prop.theme.colors.mediumLight};
    width: 3rem;
    height: 3rem;
    margin-bottom: 0;
  }

  &.modify {
    border-radius: 3.125rem;
    background-color: ${(prop) => prop.theme.colors.mediumLight};
    width: 3rem;
    height: 3rem;
    margin-bottom: 0;
  }
`;

export default ButtonStyled;
