import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
  background-color: #ffffffe0;

  .loader {
    position: relative;
    width: 6.25rem;
    height: 6.25rem;
  }

  .loader:before,
  .loader:after {
    content: "";
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 0.625rem 0.125rem #ff5ed5 inset;
  }
  .loader:after {
    box-shadow: 0 0.25rem 0 #b24195e6 inset;
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingStyled;
