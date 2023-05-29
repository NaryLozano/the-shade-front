import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const NavigationBar = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <NavLink to={"/"}>Add</NavLink>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>Logout</NavLink>
    </NavigationStyled>
  );
};

export default NavigationBar;
