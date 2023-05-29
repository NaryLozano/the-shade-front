import { Outlet } from "react-router-dom";
import ContainertStyled from "../shared/ContainerStyled";

const Layout = (): React.ReactElement => {
  return (
    <ContainertStyled>
      <Outlet />
    </ContainertStyled>
  );
};

export default Layout;
