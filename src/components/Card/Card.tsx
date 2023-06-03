import { QueenStructure } from "../../store/queens/types";
import ButtonCircle from "../ButtonCircle/ButtonCircle";
import CardStyled from "./CardStyled";
import Delete from "../../media/Delete.svg";
import modify from "../../media/Lipstick.svg";

interface CardProps {
  queen: QueenStructure;
}
const Card = ({ queen }: CardProps): React.ReactElement => {
  return (
    <CardStyled>
      <ul>
        <img className="img-card" src={queen.image} alt={queen.name} />
        <h2>{queen.name}</h2>
        <li className="details">ranking:</li>
        <li className="details"> {queen.rank}</li>
        <li className="details">{queen.hometown}</li>
      </ul>
      <ButtonCircle
        buttonType={modify}
        buttonName="modify"
        className="modify"
      ></ButtonCircle>
      <ButtonCircle
        buttonType={Delete}
        buttonName="delete"
        className="delete"
      ></ButtonCircle>
    </CardStyled>
  );
};

export default Card;
