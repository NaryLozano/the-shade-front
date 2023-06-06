import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import ListPageStyled from "./ListPageStyled";
import { loadQueensActionCreator } from "../../store/queens/queensSlice";
import List from "../../components/List/List";
import useApi from "../../hooks/useApi/useApi";
import Modal from "../../components/Modal/Modal";
import modalData from "../../data/modalData";

const ListPage = (): React.ReactElement => {
  const { queens } = useAppSelector((state) => state.queens);
  const { isError } = useAppSelector((state) => state.ui);
  const { getQueens } = useApi();
  const { className, messages, modaltype } = modalData;

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
          className={className.error}
          modaltype={modaltype.error}
          text={messages.failed}
        />
      )}
      <h1>Drag Queens</h1>
      <List queens={queens}></List>
    </ListPageStyled>
  );
};

export default ListPage;
