import { NavLink, useNavigate } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import paths from "../../routers/paths/paths";

const Navigation = (): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.user.isLogged);

  const dispatch = useAppDispatch();
  const { deleteItemLocalStorage } = useLocalStorage();
  const navigate = useNavigate();

  const handlingLogout = () => {
    deleteItemLocalStorage("token");
    dispatch(logoutUserActionCreator());

    navigate(paths.root, { replace: true });
  };

  return (
    <NavigationStyled>
      <NavLink to={"/"}>Add</NavLink>
      <NavLink to={"/home"}>Home</NavLink>
      {isLogged ? (
        <button onClick={handlingLogout} className="logout">
          Logout
        </button>
      ) : (
        ""
      )}{" "}
    </NavigationStyled>
  );
};
export default Navigation;
