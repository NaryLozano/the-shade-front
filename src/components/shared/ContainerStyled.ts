import styled from "styled-components";
const ContainertStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0 auto;
  min-width: 20rem;
  min-height: 100vh;
  position: relative;

  .modal-error {
    background: #ff4040;
    background: linear-gradient(
      180deg,
      rgba(255, 64, 64, 0.9) 0%,
      rgba(255, 48, 122, 0.594) 71.88%
    );
  }

  .modal-ok {
    background-color: #ffffffe0;
    background: #74d3ae;
    background: linear-gradient(
      180deg,
      #74d3ae 33.33%,
      rgba(180, 253, 253, 0.66) 100%
    );
  }
`;

export default ContainertStyled;
