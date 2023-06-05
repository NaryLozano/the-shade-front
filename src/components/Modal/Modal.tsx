import Button from "../Button/Button";
import buttonData from "../Button/buttonData";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  text: string;
  modaltype: string;
  className: string;
}
const Modal = ({
  text,
  modaltype,
  className,
}: ModalProps): React.ReactElement => {
  return (
    <ModalStyled>
      <article className={`modal ${className}`}>
        <h2 className="modal-title">{modaltype}</h2>
        <span className="text">{text}</span>
        <Button
          buttonA11Y={buttonData.buttonName.delete}
          text={buttonData.text?.back}
          className="light"
        ></Button>
      </article>
    </ModalStyled>
  );
};

export default Modal;
