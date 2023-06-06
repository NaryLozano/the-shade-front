import { useAppDispatch } from "../../store";
import { hideErrorActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import buttonData from "../Button/buttonData";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  text: string;
  modaltype: string;
  className: string;
}
const { buttonA11Y, buttonClassName, content } = buttonData;

const Modal = ({
  text,
  modaltype,
  className,
}: ModalProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleHideModal = () => {
    dispatch(hideErrorActionCreator({ isError: false }));
  };
  return (
    <ModalStyled className="modal">
      <article className={`modal ${className}`}>
        <h2 className="modal__title">{modaltype}</h2>
        <span className="modal__content">{text}</span>
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
