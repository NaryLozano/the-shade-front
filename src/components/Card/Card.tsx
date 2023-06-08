import { QueenStructure } from "../../store/queens/types";
import CardStyled from "./CardStyled";
import Button from "../Button/Button";
import buttonData from "../../data/button/buttonData";
import useApi from "../../hooks/useApi/useApi";

interface CardProps {
  queen: QueenStructure;
}
const Card = ({
  queen: { id, hometown, rank, image, name },
}: CardProps): React.ReactElement => {
  const { buttonA11Y, buttonClassName, buttonPicture } = buttonData;
  const { deleteQueen } = useApi();

  const handleDelete = () => {
    deleteQueen(id);
  };

  return (
    <CardStyled className="card">
      <button className="card__image-button">
        <img
          className="card__img"
          src={image}
          alt={name}
          width="240"
          height="209"
        />
      </button>

      <h2>{name}</h2>
      <span className="card__details">ranking:</span>
      <span className="card__details"> {rank}</span>
      <span className="card__details">{hometown}</span>
      <div className="card__buttons">
        <Button
          buttonImage={{
            width: buttonPicture?.modify.width,
            height: buttonPicture?.modify.height,
            img: buttonPicture?.modify.img,
          }}
          buttonA11Y={buttonA11Y.modify}
          buttonClassName={buttonClassName.modify}
        ></Button>
        <Button
          buttonImage={{
            width: buttonPicture?.delete.widht,
            height: buttonPicture?.delete.height,
            img: buttonPicture?.delete.deleteImg,
          }}
          buttonA11Y={buttonA11Y.delete}
          buttonClassName={buttonClassName.delete}
          actionOnClick={handleDelete}
        ></Button>
      </div>
    </CardStyled>
  );
};

export default Card;
