import { QueenStructure } from "../../store/queens/types";
import CardStyled from "./CardStyled";

interface CardProps {
  queen: QueenStructure;
}
const Card = ({ queen }: CardProps): React.ReactElement => {
  return (
    <CardStyled>
      <ul>
        <img className="img-card" src={queen.image} alt={queen.name} />
        <h2>{queen.name}</h2>
        <li>rank: {queen.rank}</li>
        <li>{queen.hometown}</li>
      </ul>
    </CardStyled>
  );
};

export default Card;
