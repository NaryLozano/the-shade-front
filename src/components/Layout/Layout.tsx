import { Outlet, useLocation } from "react-router-dom";
import ContainertStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import paths from "../../routers/paths/paths";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store";
import Modal from "../Modal/Modal";
import modalData from "../Modal/modalData";

const Layout = (): React.ReactElement => {
  const location = useLocation();

  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <ContainertStyled>
      {location.pathname === paths.login || <Header />}
      {isLoading && <Loading />}
      <Modal
        text={modalData.messages.addOk}
        modaltype={modalData.modaltype.OK}
        className={modalData.className.OK}
      />
      <Outlet />
    </ContainertStyled>
  );
};

export default Layout;
