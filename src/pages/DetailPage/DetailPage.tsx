import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import DetailPageStyled from "./DetailPageStyled";
import {
  loadSelectedQueenActionCreator,
  deleteQueenActionCreator,
} from "../../store/queens/queensSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../store";
import useApi from "../../hooks/useApi/useApi";
import buttonData from "../../data/button/buttonData";
import { QueenStructure } from "../../store/queens/types";
import { useEffect } from "react";
import paths from "../../routers/paths/paths";

const DetailPage = (): React.ReactElement => {
  const dispatch = useDispatch();

  const params = useParams<{ idQueen: string }>();

  const { idQueen } = params;

  const { loadSelectedQueen, deleteQueen } = useApi();

  const navigate = useNavigate();

  const { buttonA11Y, buttonClassName, buttonPicture } = buttonData;

  useEffect(() => {
    (async () => {
      const queenById = await loadSelectedQueen(idQueen as string);
      if (queenById) {
        dispatch(loadSelectedQueenActionCreator(queenById));
      }
    })();
  }, [dispatch, idQueen, loadSelectedQueen]);
  const queen = useAppSelector(
    (state) => state.queens.queenById
  ) as QueenStructure;

  const handleDelete = async () => {
    await deleteQueen(idQueen);
    dispatch(deleteQueenActionCreator(idQueen));
    navigate(paths.home);
  };
  const { name, hometown, image, rank, age, season } = queen;
  return (
    <DetailPageStyled>
      <article className="details">
        <img
          className="details__img"
          src={image}
          alt={name}
          width="240"
          height="209"
        />
        <h2>{name}</h2>
        <ul>
          <li className="details__content--name">age</li>
          <li className="details__content">{age}</li>
          <li className="details__content--name">season</li>
          <li className="details__content">{season}</li>
          <li className="details__content--name">rank</li>
          <li className="details__content">{rank}</li>
          <li className="details__content--name">hometown</li>
          <li className="details__content">{hometown}</li>
          <li className="details__content--name">memorable quote</li>
          <li className="details__content">Quote here Please</li>
        </ul>
        <div className="details__buttons">
          <Button
            buttonImage={{
              width: buttonPicture?.modify.width,
              height: buttonPicture?.modify.height,
              img: buttonPicture?.modify.img,
            }}
            buttonA11Y={buttonA11Y.modify}
            buttonClassName={buttonClassName.modify}
          />
          <Button
            buttonImage={{
              width: buttonPicture?.delete.width,
              height: buttonPicture?.delete.height,
              img: buttonPicture?.delete.deleteImg,
            }}
            buttonA11Y={buttonA11Y.delete}
            buttonClassName={buttonClassName.delete}
            actionOnClick={handleDelete}
          />
        </div>
      </article>
    </DetailPageStyled>
  );
};

export default DetailPage;
