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
    <ModalStyled className={className}>
      <h1>{modaltype}</h1>
      <span>{text}</span>
      <button>back</button>
    </ModalStyled>
  );
};

export default Modal;
