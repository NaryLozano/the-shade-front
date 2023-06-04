import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <span className="loader" aria-label="loader"></span>
    </LoadingStyled>
  );
};

export default Loading;
