import buttonData from "../../data/button/buttonData";
import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const { buttonA11Y, buttonClassName, content } = buttonData;
const Pagination = (): React.ReactElement => {
  return (
    <PaginationStyled>
      <Button
        buttonA11Y={buttonA11Y.loadmore}
        buttonClassName={buttonClassName.primary.dark}
        text={content?.loadmore}
      />
    </PaginationStyled>
  );
};

export default Pagination;
