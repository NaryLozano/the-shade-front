import { useAppDispatch, useAppSelector } from "../../store";
import { hideModalActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import buttonData from "../../data/button/buttonData";
import ModalStyled from "./ModalStyled";
import modalData from "../../data/modal/modalData";

const { buttonA11Y, buttonClassName, content } = buttonData;
const { modaltype } = modalData;
const Modal = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const { modalData } = useAppSelector((state) => state.ui);

  const handleHideModal = () => {
    dispatch(hideModalActionCreator());
  };

  return (
    <ModalStyled className="modal">
      <article
        className={`modal modal${modalData?.isSuccess ? "--ok" : "--error"}`}
      >
        <h2 className="modal__title">{`${
          modalData?.isSuccess ? modaltype.ok : modaltype.error
        }`}</h2>
        <span className="modal__content">{modalData?.modalMessage}</span>
        <Button
          actionOnClick={handleHideModal}
          buttonA11Y={buttonA11Y.back}
          text={content?.back}
          buttonClassName={buttonClassName.primary.light}
          isDissabled={false}
        />
      </article>
    </ModalStyled>
  );
};

export default Modal;
