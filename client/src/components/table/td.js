import React from "react";
import styled from "styled-components";

const StyledTd = styled.td`
  padding: 12px 20px;
  white-space: nowrap;
  font-size: 14px;
  color: ${props => props.theme.color.gray700};
  line-height: 22px;
`;

export const Td = ({ children }) => {
  return <StyledTd>{children}</StyledTd>;
};
