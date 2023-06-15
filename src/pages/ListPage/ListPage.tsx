import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import ListPageStyled from "./ListPageStyled";
import { loadQueensActionCreator } from "../../store/queens/queensSlice";
import List from "../../components/List/List";
import useApi from "../../hooks/useApi/useApi";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";

const ListPage = (): React.ReactElement => {
  const { getQueens } = useApi();

  const dispatch = useAppDispatch();

  const [skip, setSkip] = useState(0);
  const [totalQueens, setTotalQueens] = useState(0);
  const [filterValue, setFilterValue] = useState("");

  const limit = 5;

  useEffect(() => {
    (async () => {
      const params = filterValue
        ? {
            limit: limit,
            skip: skip,
            filter: "season",
            filterValue: filterValue,
          }
        : {
            limit: limit,
            skip: skip,
          };
      const { queens, total } = await getQueens({ ...params });

      if (queens) {
        dispatch(loadQueensActionCreator({ queens, total }));
        setTotalQueens(total);

        const firstImages = [queens[0].image];

        const preload = await document.createElement("link");

        preload.rel = "preLoad";
        preload.as = "image";
        preload.href = firstImages.join(",");

        const headDocument = document.head;
        const firstElement = document.head.firstChild;

        headDocument.insertBefore(preload, firstElement);
      }
    })();
  }, [dispatch, filterValue, getQueens, skip]);

  const previousQueens = () => {
    setSkip(skip - limit);
  };
  const nextQueens = () => {
    setSkip(skip + limit);
  };

  return (
    <ListPageStyled>
      <Filter setFilterValue={setFilterValue} setSkip={setSkip} />
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
