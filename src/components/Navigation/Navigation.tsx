import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <NavLink to={"/"} aria-label="to Add page">
        Add
      </NavLink>
      <NavLink to={"/"} aria-label="to Home page">
        Home
      </NavLink>
      <NavLink to={"/"} aria-label="logout of app">
        Logout
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
