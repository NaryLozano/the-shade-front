import { QueenStructure } from "../../store/queens/types";
import ListStyled from "./ListStyled";

interface ListProps {
  queens: QueenStructure[];
}
const List = ({ queens }: ListProps): React.ReactElement => {
  return (
    <ListStyled>
      {queens.map((queen) => (
        <li className="queen" key={queen.id}>
          <h2>{queen.name}</h2>
        </li>
      ))}
    </ListStyled>
  );
};

export default List;
