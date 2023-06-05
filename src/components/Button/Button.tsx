import ButtonStyled from "./ButtonStyled";
interface ButtonProps {
  buttonType: string;
  buttonName: string;
  className: string;
}
const Button = ({
  buttonType,
  buttonName,
  className,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={className}>
      <img src={buttonType} alt={buttonName} />
    </ButtonStyled>
  );
};

export default Button;
