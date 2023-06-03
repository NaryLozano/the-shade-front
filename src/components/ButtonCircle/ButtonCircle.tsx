import ButtonCircleStyled from "./ButtonCircleStyled";
interface ButtonCircleProps {
  buttonType: string;
  buttonName: string;
  className: string;
}
const ButtonCircle = ({
  buttonType,
  buttonName,
  className,
}: ButtonCircleProps): React.ReactElement => {
  return (
    <ButtonCircleStyled className={className}>
      <img src={buttonType} alt={buttonName} />
    </ButtonCircleStyled>
  );
};

export default ButtonCircle;
