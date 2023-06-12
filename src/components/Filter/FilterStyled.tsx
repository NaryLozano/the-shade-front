import styled from "styled-components";

const FilterStyled = styled.select`
  width: 17.5rem;
  height: 3.125rem;
  color: ${(prop) => prop.theme.colors.darkPrimary};
  background-color: ${(prop) => prop.theme.colors.backgroundCard};
  font-family: inherit;
  border-radius: 0.625rem;
  font-family: ${(prop) => prop.theme.fonts.primary};
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  box-shadow: ${(prop) => prop.theme.colors.shadow};
  padding: 0.625rem 0.625rem;
  option {
    background-color: ${(prop) => prop.theme.colors.backgroundCard};
    border-radius: 0.625rem;
  }
`;
export default FilterStyled;
