import Form from "../../components/Form/Form";
import AddPageStyled from "./AddPageStyled";

const AddPage = (): React.ReactElement => {
  return (
    <AddPageStyled className="add">
      <h1 className="add__title">add queen</h1>
      <Form submitForm={() => ({})} />
    </AddPageStyled>
  );
};

export default AddPage;
