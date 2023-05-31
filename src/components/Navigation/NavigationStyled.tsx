import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-weight: bold;

  .logout {
    background-color: transparent;
    font-family: inherit;
    box-shadow: none;
    text-transform: uppercase;
  }
`;
export default NavigationStyled;
