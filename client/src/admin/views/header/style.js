import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  > svg {
    margin-left: -2px;
  }

  > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${breakpoint.lg`
      display: none;
    `}
  }
`;

export const SearchWrapper = styled.div`
  display: none;
  ${breakpoint.lg`
    display: block;
    width: 100%;
  `}
`;

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
