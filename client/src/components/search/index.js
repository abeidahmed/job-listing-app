import React from "react";
import styled, { css } from "styled-components";
import Icon from "components/icon";
import { InputField } from "components/field";

const SearchWrapper = styled.div`
  width: 100%;
  position: relative;
  ${props =>
    props.size === "sm" &&
    css`
      svg {
        height: 20px;
        width: 20px;
      }
    `}
`;

const StyledInput = styled(InputField)`
  padding-left: 34px;
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  align-items: center;
  left: 0;
  padding-left: 8px;
  pointer-events: none;
`;

export const Search = ({ size, ...props }) => {
  return (
    <SearchWrapper size={size}>
      <StyledInput type="text" size={size} {...props} />
      <IconWrapper>
        <Icon glyph="search" color="#9FA6B2" />
      </IconWrapper>
    </SearchWrapper>
  );
};
