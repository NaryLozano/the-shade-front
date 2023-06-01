import { NavLink, useNavigate } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import paths from "../../routers/paths/paths";

const Navigation = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteItemLocalStorage } = useLocalStorage();
  const Navigate = useNavigate();

  const handlingLogout = () => {
    deleteItemLocalStorage("token");
    dispatch(logoutUserActionCreator());

    Navigate(paths.root, { replace: true });
  };

  return (
    <NavigationStyled>
      <NavLink to={"/"}>Add</NavLink>
      <NavLink to={"/home"}>Home</NavLink>
      <button onClick={handlingLogout} className="logout">
        Logout
      </button>
    </NavigationStyled>
  );
};

export default Navigation;
