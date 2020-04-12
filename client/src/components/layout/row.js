import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  margin-right: -${props => props.gap};
  margin-left: -${props => props.gap};
`;
