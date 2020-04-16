import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "utils/breakpoint";

const StyledTd = styled.td`
  ${props =>
    props.hasDropdown &&
    css`
      display: none;
      ${breakpoint.lg`
      display: table-cell;
    `}
    `};
  padding: 12px 20px;
  white-space: nowrap;
  font-size: 14px;
  color: ${props => props.theme.color.gray700};
  line-height: 22px;
`;

export const Td = ({ children, ...props }) => {
  return <StyledTd {...props}>{children}</StyledTd>;
};
