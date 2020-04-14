import React from "react";
import styled from "styled-components";

const Main = styled.main`
  background-color: ${props => props.theme.color.gray50};
  padding: 24px;
  min-height: calc(100vh - 113px);
`;

export const AdminContainer = ({ children }) => {
  return <Main>{children}</Main>;
};
