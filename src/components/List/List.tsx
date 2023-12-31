import { useAppSelector } from "../../store";
import Card from "../Card/Card";
import ListStyled from "./ListStyled";

const List = (): React.ReactElement => {
  const { queens } = useAppSelector((state) => state.queens);
  return (
    <ListStyled>
      {queens.length === 0 && <p>no results found</p>}
      {queens.map((queen) => (
        <li className="queen" key={queen.id}>
          <Card queen={queen} />
        </li>
      ))}
    </ListStyled>
  );
};

export default List;
