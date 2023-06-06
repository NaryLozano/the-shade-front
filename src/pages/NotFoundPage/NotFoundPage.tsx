import NotFoundPageStyled from "./NotFoundPageStyled";
import error404 from "../../media/error404.svg";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="not-found">
      <h1 className="not-found__title">error</h1>
      <img className="not-found__image" src={error404} alt="error 404" />
      <span className="not-found__message">there`s nothing here</span>
    </NotFoundPageStyled>
  );
};
export default NotFoundPage;
