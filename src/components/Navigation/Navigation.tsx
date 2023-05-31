import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <NavLink to={"/"}>Add</NavLink>
      <NavLink to={"/"}>Home</NavLink>
      <button onClick={() => ({})} className="logout">
        Logout
      </button>
    </NavigationStyled>
  );
};

export default Navigation;
