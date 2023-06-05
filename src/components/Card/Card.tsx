import { QueenStructure } from "../../store/queens/types";
import CardStyled from "./CardStyled";
import Delete from "../../media/Delete.svg";
import modify from "../../media/Lipstick.svg";
import Button from "../Button/Button";
import buttonData from "../Button/buttonData";

interface CardProps {
  queen: QueenStructure;
}
const Card = ({ queen }: CardProps): React.ReactElement => {
  return (
    <CardStyled className="card">
      <button className="card__image-button">
        <img className="card__img" src={queen.image} alt={queen.name} />
      </button>

      <h2>{queen.name}</h2>
      <span className="card__details">ranking:</span>
      <span className="card__details"> {queen.rank}</span>
      <span className="card__details">{queen.hometown}</span>
      <div className="card__buttons">
        <Button
          buttonImage={(buttonData.buttonImage = modify)}
          buttonA11Y={buttonData.buttonName.modify}
          className={buttonData.className.modify}
        ></Button>
        <Button
          buttonImage={(buttonData.buttonImage = Delete)}
          buttonA11Y={buttonData.buttonName.delete}
          className={buttonData.className.delete}
        ></Button>
      </div>
    </CardStyled>
  );
};

export default Card;
