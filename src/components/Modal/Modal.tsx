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
  return (
    <ModalStyled className="modal">
      <article className={`modal ${className}`}>
        <h2 className="modal__title">{modaltype}</h2>
        <span className="modal__content">{text}</span>
        <Button
          buttonA11Y={buttonA11Y.back}
          text={content?.back}
          buttonClassName={buttonClassName.primary.light}
        ></Button>
      </article>
    </ModalStyled>
  );
};

export default Modal;
