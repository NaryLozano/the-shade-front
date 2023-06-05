import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import ListPageStyled from "./ListPageStyled";
import { loadQueensActionCreator } from "../../store/queens/queensSlice";
import List from "../../components/List/List";
import useApi from "../../hooks/useApi/useApi";
import Modal from "../../components/Modal/Modal";
import modalData from "../../components/Modal/modalData";

const ListPage = (): React.ReactElement => {
  const { queens } = useAppSelector((state) => state.queens);
  const { isError } = useAppSelector((state) => state.ui);
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
      {isError && (
        <Modal
          className={modalData.className.error}
          modaltype={modalData.modaltype.error}
          text={modalData.messages.failed}
        />
      )}
      <h1>Drag Queens</h1>
      <List queens={queens}></List>
    </ListPageStyled>
  );
};

export default ListPage;
