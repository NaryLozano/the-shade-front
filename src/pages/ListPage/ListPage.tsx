import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import ListPageStyled from "./ListPageStyled";
import { loadQueensActionCreator } from "../../store/queens/queensSlice";
import List from "../../components/List/List";
import useApi from "../../hooks/useApi/useApi";
import Pagination from "../../components/Pagination/Pagination";

const ListPage = (): React.ReactElement => {
  const { getQueens } = useApi();

  const dispatch = useAppDispatch();

  const [skip, setSkip] = useState(0);
  const [totalQueens, setTotalQueens] = useState(0);
  const limit = 5;
  useEffect(() => {
    (async () => {
      const { queens, total } = await getQueens(limit, skip);

      if (queens) {
        dispatch(loadQueensActionCreator(queens));
        setTotalQueens(total);

        const firstImage = queens[0].image;

        const preload = await document.createElement("link");

        preload.rel = "preLoad";
        preload.as = "image";
        preload.href = firstImage;

        const headDocument = document.head;
        const firstElement = document.head.firstChild;

        headDocument.insertBefore(preload, firstElement);
      }
    })();
  }, [dispatch, getQueens, skip, totalQueens]);

  const previousQueens = () => {
    setSkip(skip - limit);
  };
  const nextQueens = () => {
    setSkip(skip + limit);
  };

  return (
    <ListPageStyled>
      <h1>Drag Queens</h1>
      <List></List>
      <Pagination
        total={totalQueens}
        nextPage={nextQueens}
        previousPage={previousQueens}
        skip={skip}
      />
    </ListPageStyled>
  );
};

export default ListPage;
