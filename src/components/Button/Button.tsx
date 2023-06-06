import ButtonStyled from "./ButtonStyled";
interface ButtonProps {
  buttonImage?: string;
  buttonA11Y: string;
  buttonClassName: string;
  text?: string;
}
const Button = ({
  buttonImage,
  buttonA11Y,
  buttonClassName,
  text,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={buttonClassName}>
      {buttonImage ? <img src={buttonImage} alt={buttonA11Y} /> : ""}
      {text}
    </ButtonStyled>
  );
};

export default Button;
