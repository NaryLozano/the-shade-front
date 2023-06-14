import ButtonStyled from "./ButtonStyled";
interface ButtonProps {
  buttonImage?: {
    width: string | undefined;
    height: string | undefined;
    img: string | undefined;
  };
  buttonA11Y: string;
  buttonClassName: string;
  text?: string;
  actionOnClick?: () => void;
  isDissabled?: boolean;
}
const Button = ({
  buttonImage,
  buttonA11Y,
  buttonClassName,
  text,
  actionOnClick,
  isDissabled,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      className={buttonClassName}
      onClick={actionOnClick}
      disabled={isDissabled}
      aria-label={buttonA11Y}
    >
      {buttonImage ? (
        <img
          src={buttonImage.img}
          alt={buttonA11Y}
          height={buttonImage.height}
          width={buttonImage.width}
        />
      ) : (
        ""
      )}
      {text}
    </ButtonStyled>
  );
};

export default Button;
