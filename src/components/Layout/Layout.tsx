import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import paths from "../../routers/paths/paths";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store";
import LayoutStyled from "./LayoutStyled";

const Layout = (): React.ReactElement => {
  const location = useLocation();

  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <LayoutStyled>
      {location.pathname === paths.login || <Header />}
      {isLoading && <Loading />}
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
