import { QueenStructure } from "../../store/queens/types";
import CardStyled from "./CardStyled";
import Button from "../Button/Button";
import buttonData from "../Button/buttonData";

interface CardProps {
  queen: QueenStructure;
}
const Card = ({ queen }: CardProps): React.ReactElement => {
  const { buttonA11Y, buttonClassName, buttonPicture } = buttonData;
  return (
    <CardStyled className="card">
      <button className="card__image-button">
        <img
          className="card__img"
          src={queen.image}
          alt={queen.name}
          width=""
        />
      </button>

      <h2>{queen.name}</h2>
      <span className="card__details">ranking:</span>
      <span className="card__details"> {queen.rank}</span>
      <span className="card__details">{queen.hometown}</span>
      <div className="card__buttons">
        <Button
          actionOnClick={() => ({})}
          buttonImage={buttonPicture?.modify}
          buttonA11Y={buttonA11Y.modify}
          buttonClassName={buttonClassName.modify}
        ></Button>
        <Button
          actionOnClick={() => ({})}
          buttonImage={buttonPicture?.Delete}
          buttonA11Y={buttonA11Y.delete}
          buttonClassName={buttonClassName.delete}
        ></Button>
      </div>
    </CardStyled>
  );
};

export default Card;
