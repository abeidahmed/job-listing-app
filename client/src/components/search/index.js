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
  padding: 0 34px;
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

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  margin-right: 8px;

  > button {
    height: 20px;
    width: 20px;
    border-radius: 9999px;
    background-color: ${props => props.theme.color.gray100};
    transition: 150ms all ease-in-out;

    path {
      transition: 100ms all ease-in-out;
    }

    &:hover {
      path {
        fill: ${props => props.theme.color.gray600};
      }
    }

    &:focus {
      outline: none;
      background-color: ${props => props.theme.color.gray200};
    }
  }
`;

export const Search = ({ size, show, reset, ...props }) => {
  return (
    <SearchWrapper size={size}>
      <StyledInput type="text" size={size} {...props} />
      <IconWrapper>
        <Icon glyph="search" color="#9FA6B2" />
      </IconWrapper>
      {show && (
        <CloseIcon>
          <button onClick={() => reset("")}>
            <Icon glyph="close" />
          </button>
        </CloseIcon>
      )}
    </SearchWrapper>
  );
};
