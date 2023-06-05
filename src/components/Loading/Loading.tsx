import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <span className="loader" data-testid="loader"></span>
    </LoadingStyled>
  );
};

export default Loading;
