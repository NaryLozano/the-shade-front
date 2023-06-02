import { QueenStructure } from "../../store/queens/types";

interface CardProps {
  queen: QueenStructure;
}
const Card = ({ queen }: CardProps): React.ReactElement => {
  return (
    <ul>
      <img src={queen.image} alt={queen.name} />
      <h2>{queen.name}</h2>
      <li>{queen.rank}</li>
      <li>{queen.hometown}</li>
    </ul>
  );
};

export default Card;
