import styled from "styled-components";

const CardStyled = styled.article`
  display: flex;
  justify-content: center;
  width: 17.5rem;
  height: 29.375rem;
  background-color: #f5f5f5;
  border-radius: 0.813rem;
  padding-top: 1.25rem;
  box-shadow: 0 0.25rem 0.25rem #00000040;
  position: relative;

  h2 {
    padding-top: 0.625rem;
  }
  .img-card {
    width: 15rem;
    height: 12.5rem;
    border-radius: 0.813rem;
    box-shadow: 0px 0.25rem 0.25rem #00000040;
    border: 0.125rem solid #ff5ed557;
  }

  .delete {
    right: 1.25rem;
    bottom: 1.25rem;
  }

  .modify {
    left: 1.25rem;
    bottom: 1.25rem;
  }

  .details {
    color: #000;
    padding: 0.313rem;
  }
`;

export default CardStyled;
