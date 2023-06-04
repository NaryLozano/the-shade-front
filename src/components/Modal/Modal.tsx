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
        <button>back</button>
      </article>
    </ModalStyled>
  );
};

export default Modal;
