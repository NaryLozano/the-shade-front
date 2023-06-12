import styled from "styled-components";

const ListPageStyled = styled.main`
  padding-left: 1.25rem;
  color: ${(props) => props.theme.colors.darkSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 2.188rem;
  }
  .filter-container {
    margin: 1.25rem;
  }
`;
export default ListPageStyled;
