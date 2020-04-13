import React from "react";
import styled from "styled-components";
import Icon from "components/icon";
import { InputField } from "components/field";

const SearchWrapper = styled.div`
  max-width: 335px;
  width: 100%;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  align-items: center;
  right: 0;
  padding-right: 10px;
  pointer-events: none;
`;

export const Search = ({ ...props }) => {
  return (
    <SearchWrapper>
      <InputField type="text" {...props} />
      <IconWrapper>
        <Icon glyph="search" color="#9FA6B2" />
      </IconWrapper>
    </SearchWrapper>
  );
};
