import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: ${(prop) => prop.theme.fonts.primary};
  font-weight: 400;
  background-color: ${(prop) => prop.theme.colors.light} ;
  text-transform: uppercase;
}

body {
  margin: 0;

}

main{
  padding: 20px;
}

h1,
h2,
h3,
p {
  margin: 0;
  font-family: inherit;
}

button {
  border: none;
  font: inherit;
  cursor: pointer;
}

input {
  font: inherit;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

ul
{
list-style: none;
padding: 0;
margin: 0;
}

`;

export default GlobalStyle;
