import { QueenStructure } from "../../store/queens/types";
import Card from "../Card/Card";
import ListStyled from "./ListStyled";
interface ListProps {
  queens: QueenStructure[];
}

const List = ({ queens }: ListProps): React.ReactElement => {
  return (
    <ListStyled>
      {queens.map((queen) => (
        <li className="queen" key={queen.id}>
          <Card queen={queen} />
        </li>
      ))}
    </ListStyled>
  );
};

export default List;
