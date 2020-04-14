import React from "react";
import styled, { css } from "styled-components";
import Icon from "components/icon";

const StyledTh = styled.th`
  padding: 12px 20px;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => props.theme.color.gray500};
  text-transform: uppercase;
  white-space: nowrap;

  ${props =>
    props.hasButton &&
    css`
      > div {
        display: flex;
        align-items: center;
        cursor: pointer;

        > span {
          padding-right: 4px;
        }
      }
    `}
`;

export const Th = ({ hasButton, title, glyph = "sort-solid" }) => {
  return (
    <StyledTh hasButton={hasButton}>
      {hasButton ? (
        <div role="button">
          <span>{title}</span>
          <Icon glyph={glyph} height="12" width="12" />
        </div>
      ) : (
        title
      )}
    </StyledTh>
  );
};
