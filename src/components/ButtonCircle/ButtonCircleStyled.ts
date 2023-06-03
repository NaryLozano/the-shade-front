import styled from "styled-components";

const ButtonCircleStyled = styled.button.attrs((props) => ({
  className: props.className,
}))`
  border-radius: 3.125rem;
  background-color: #dedede;
  position: absolute;
  border-radius: 3.125rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ButtonCircleStyled;
