import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import ListPageStyled from "./ListPageStyled";
import { loadQueensActionCreator } from "../../store/queens/queensSlice";
import List from "../../components/List/List";
import useApi from "../../hooks/useApi/useApi";

const ListPage = (): React.ReactElement => {
  const { queens } = useAppSelector((state) => state.queens);
  const { getQueens } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const queens = await getQueens();
      dispatch(loadQueensActionCreator(queens));
    })();
  }, [dispatch, getQueens]);

  return (
    <ListPageStyled>
      <h1>Drag Queens</h1>
      <List queens={queens}></List>
    </ListPageStyled>
  );
};

export default ListPage;
