import React from "react";
import styled from "styled-components";

const StyledTbody = styled.tbody`
  background-color: white;
`;

export const Tbody = ({ children, ...props }) => {
  return <StyledTbody {...props}>{children}</StyledTbody>;
};
