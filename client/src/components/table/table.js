import React from "react";
import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";

const TableWrapper = styled.div`
  overflow-x: auto;
  box-shadow: ${props => props.theme.shadow.small};
  border-radius: 4px;
  ${breakpoint.lg`
    overflow: initial;
  `}
`;

const TableContainer = styled.div`
  display: inline-block;
  min-width: 100%;
  overflow: hidden;
  vertical-align: middle;
  ${breakpoint.lg`
    overflow: visible;
  `}
`;

const StyledTable = styled.table`
  min-width: 100%;
`;

export const Table = ({ children }) => {
  return (
    <TableWrapper>
      <TableContainer>
        <StyledTable>{children}</StyledTable>
      </TableContainer>
    </TableWrapper>
  );
};
