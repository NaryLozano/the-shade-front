import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import ListPageStyled from "./ListPageStyled";
import { loadQueensActionCreator } from "../../store/queens/queensSlice";
import { queensMock } from "../../mocks/queensMocks";
import List from "../../components/List/List";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { queens } = useAppSelector((state) => state.queens);

  useEffect(() => {
    (async () => {
      dispatch(loadQueensActionCreator(queensMock));
    })();
  }, [dispatch]);

  return (
    <ListPageStyled>
      <h1>Drag Queens</h1>
      <List queens={queens}></List>
    </ListPageStyled>
  );
};

export default ListPage;
