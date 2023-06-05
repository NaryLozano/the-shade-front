import ButtonStyled from "./ButtonStyled";
interface ButtonProps {
  buttonImage?: string;
  buttonA11Y: string;
  className: string;
  text?: string;
}
const Button = ({
  buttonImage: buttonImage,
  buttonA11Y: buttonA11Y,
  text,
  className,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={className}>
      {buttonImage ? <img src={buttonImage} alt={buttonA11Y} /> : ""}
      {text}
    </ButtonStyled>
  );
};

export default Button;
