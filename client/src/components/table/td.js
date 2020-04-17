import React from "react";
import styled, { css } from "styled-components";

const StyledTd = styled.td`
  padding: 12px 20px;
  white-space: nowrap;
  font-size: 14px;
  color: ${props => props.theme.color.gray700};
  line-height: 22px;

  ${props =>
    props.hasLinks &&
    css`
      a,
      button {
        text-decoration: none;
        color: ${props => props.theme.color.blue700};
        &:hover {
          text-decoration: underline;
        }
        &:focus {
          outline: none;
          color: ${props => props.theme.color.textDark};
        }
      }
    `}
`;

export const Td = ({ children, ...props }) => {
  return <StyledTd {...props}>{children}</StyledTd>;
};
