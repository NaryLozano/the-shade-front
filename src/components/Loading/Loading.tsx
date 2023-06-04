import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <span className="loader"></span>
    </LoadingStyled>
  );
};

export default Loading;
