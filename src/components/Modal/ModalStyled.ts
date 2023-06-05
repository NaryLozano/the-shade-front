import styled from "styled-components";

const ModalStyled = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: #ffffffe0;
  flex-direction: column;
  color: #fff;
  top: 0;
  position: absolute;

  .modal {
    width: 285px;
    height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffffe0;
    flex-direction: column;
    border-radius: 10px;
    color: #fff;
    position: absolute;
  }
  .modal-title {
    margin-top: 25px;
  }
`;
export default ModalStyled;
