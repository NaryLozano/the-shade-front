import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import ContainertStyled from "../shared/ContainerStyled";
import { LazyHeader } from "../../routers/lazyComponents/lazyComponents";

const Layout = (): React.ReactElement => {
  const location = useLocation();

  return (
    <ContainertStyled>
      {location.pathname !== "/login" && (
        <Suspense>
          <LazyHeader />
        </Suspense>
      )}
      <Outlet />
    </ContainertStyled>
  );
};

export default Layout;
