import { useAppDispatch, useAppSelector } from "../../store";
import { hideErrorActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import buttonData from "../../data/buttonData";
import ModalStyled from "./ModalStyled";
import modalData from "../../data/modalData";

const { buttonA11Y, buttonClassName, content } = buttonData;
const { modaltype } = modalData;
const Modal = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const { isSuccess, modalMessage } = useAppSelector((state) => state.ui);

  const handleHideModal = () => {
    dispatch(hideErrorActionCreator());
  };

  return (
    <ModalStyled className="modal">
      <article className={`modal modal${isSuccess ? "__ok" : "__error"}`}>
        <h2 className="modal__title">{`${
          isSuccess ? modaltype.OK : modaltype.error
        }`}</h2>
        <span className="modal__content">{modalMessage}</span>
        <Button
          actionOnClick={handleHideModal}
          buttonA11Y={buttonA11Y.back}
          text={content?.back}
          buttonClassName={buttonClassName.primary.light}
        ></Button>
      </article>
    </ModalStyled>
  );
};

export default Modal;
