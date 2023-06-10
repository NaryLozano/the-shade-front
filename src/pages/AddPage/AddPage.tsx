import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import { addQueenActionCreator } from "../../store/queens/queensSlice";
import { QueenStructure } from "../../store/queens/types";
import AddPageStyled from "./AddPageStyled";
import paths from "../../routers/paths/paths";
import { showModalActionCreator } from "../../store/ui/uiSlice";
import modalData from "../../data/modal/modalData";

const AddPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { addQueen } = useApi();
  const navigate = useNavigate();
  const { messages } = modalData;

  const onSubmit = async (queenData: QueenStructure) => {
    const newQueen = await addQueen(queenData);

    dispatch(addQueenActionCreator(newQueen));

    navigate(paths.home);
    dispatch(
      showModalActionCreator({
        modalData: {
          isSuccess: true,
          showFeedback: true,
          modalMessage: messages.addOk,
        },
      })
    );
  };
  return (
    <AddPageStyled className="add">
      <h1 className="add__title">add queen</h1>
      <Form onSubmit={onSubmit} />
    </AddPageStyled>
  );
};

export default AddPage;
