import { Outlet, useLocation } from "react-router-dom";
import ContainertStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import paths from "../../routers/paths/paths";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store";

const Layout = (): React.ReactElement => {
  const location = useLocation();

  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <ContainertStyled>
      {location.pathname === paths.login || <Header />}
      {isLoading && <Loading />}
      <Outlet />
    </ContainertStyled>
  );
};

export default Layout;
