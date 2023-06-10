import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import ListPageStyled from "./ListPageStyled";
import { loadQueensActionCreator } from "../../store/queens/queensSlice";
import List from "../../components/List/List";
import useApi from "../../hooks/useApi/useApi";
import Pagination from "../../components/Pagination/Pagination";

const ListPage = (): React.ReactElement => {
  const { queens } = useAppSelector((state) => state.queens);
  const { getQueens } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const queens = await getQueens();
      dispatch(loadQueensActionCreator(queens));

      const firstImage = queens[0].image;

      const preload = await document.createElement("link");

      preload.rel = "preLoad";
      preload.as = "image";
      preload.href = firstImage;

      const headDocument = document.head;
      const firstElement = document.head.firstChild;

      headDocument.insertBefore(preload, firstElement);
    })();
  }, [dispatch, getQueens]);

  return (
    <ListPageStyled>
      <h1>Drag Queens</h1>
      <List queens={queens}></List>
      <Pagination />
    </ListPageStyled>
  );
};

export default ListPage;
