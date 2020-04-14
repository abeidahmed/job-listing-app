import React from "react";
import styled from "styled-components";

const StyledTr = styled.tr`
  border-bottom: 1px solid ${props => props.theme.color.gray200};
  &:last-child {
    border-color: transparent;
  }
`;

export const Tr = ({ children }) => {
  return <StyledTr>{children}</StyledTr>;
};
