import Button from "../Button/Button";
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
        <h1 className="modal-title">{modaltype}</h1>
        <span>{text}</span>
        <Button buttonName="back" buttonType="" className="back"></Button>
      </article>
    </ModalStyled>
  );
};

export default Modal;
