import Navigation from "../Navigation/Navigation";
import ContainertStyled from "../shared/ContainerStyled";

const Layout = (): React.ReactElement => {
  return (
    <ContainertStyled>
      <Navigation></Navigation>
    </ContainertStyled>
  );
};

export default Layout;
