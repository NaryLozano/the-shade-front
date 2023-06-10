import Form from "../../components/Form/Form";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import { addQueenActionCreator } from "../../store/queens/queensSlice";
import { QueenStructure } from "../../store/queens/types";
import AddPageStyled from "./AddPageStyled";

const AddPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { addQueen } = useApi();

  const onSubmit = async (queenData: QueenStructure) => {
    const newQueen = await addQueen(queenData);

    dispatch(addQueenActionCreator(newQueen));
  };
  return (
    <AddPageStyled className="add">
      <h1 className="add__title">add queen</h1>
      <Form onSubmit={onSubmit} />
    </AddPageStyled>
  );
};

export default AddPage;
