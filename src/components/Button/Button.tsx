import ButtonStyled from "./ButtonStyled";
interface ButtonProps {
  buttonImage?: string;
  buttonA11Y: string;
  buttonClassName: string;
  text?: string;
  actionOnClick: () => void;
}
const Button = ({
  buttonImage,
  buttonA11Y,
  buttonClassName,
  text,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={buttonClassName} onClick={actionOnClick}>
      {buttonImage ? <img src={buttonImage} alt={buttonA11Y} /> : ""}
      {text}
    </ButtonStyled>
  );
};

export default Button;
