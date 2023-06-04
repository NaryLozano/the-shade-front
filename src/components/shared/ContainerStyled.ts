import styled from "styled-components";
const ContainertStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0 auto;
  min-width: 20rem;
  min-height: 100vh;
  .modal-error {
    background-color: red;
  }

  .modal-ok {
    background-color: green;
  }
`;

export default ContainertStyled;
