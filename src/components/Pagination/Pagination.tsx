import buttonData from "../../data/button/buttonData";
import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  nextPage: () => void;
  previousPage: () => void;
  total: number;
  skip: number;
}
const { buttonA11Y, buttonClassName, buttonPicture } = buttonData;
const Pagination = ({
  nextPage,
  previousPage,
  skip,
  total,
}: PaginationProps): React.ReactElement => {
  const nextButton = () => {
    nextPage();
    window.scrollTo(0, 0);
  };

  const previousButton = () => {
    previousPage();
    window.scrollTo(0, 0);
  };
  const hidePrevious = skip < 5;
  const hideNext = total - skip <= 5;

  return (
    <PaginationStyled>
      <Button
        buttonImage={buttonPicture?.paginationPrev}
        buttonA11Y={buttonA11Y.previous}
        buttonClassName={buttonClassName.pagination}
        actionOnClick={previousButton}
        isDissabled={hidePrevious && true}
      />

      <Button
        buttonImage={buttonPicture?.paginationNext}
        buttonA11Y={buttonA11Y.next}
        buttonClassName={buttonClassName.pagination}
        actionOnClick={nextButton}
        isDissabled={hideNext && true}
      />
    </PaginationStyled>
  );
};

export default Pagination;
