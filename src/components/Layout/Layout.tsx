import { Outlet, useLocation } from "react-router-dom";
import ContainertStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";

const Layout = (): React.ReactElement => {
  const location = useLocation();

  return (
    <ContainertStyled>
      {location.pathname !== "/login" && <Header />}
      <Outlet />
    </ContainertStyled>
  );
};

export default Layout;
