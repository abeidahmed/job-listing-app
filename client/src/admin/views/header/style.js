import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.color.gray200};
  padding: 0 24px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
