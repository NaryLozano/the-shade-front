import { Outlet, useLocation } from "react-router-dom";
import ContainertStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import paths from "../../routers/paths/paths";
import Loading from "../Loading/Loading";

const Layout = (): React.ReactElement => {
  const location = useLocation();

  return (
    <ContainertStyled>
      {location.pathname === paths.login || <Header />}
      <Loading />
      <Outlet />
    </ContainertStyled>
  );
};

export default Layout;
