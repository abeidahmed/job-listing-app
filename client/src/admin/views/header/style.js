import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";
import { StyledButton } from "components/button";
import { zIndex } from "helpers/z-index";

export const StyledHeader = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.color.gray200};
  padding: 0 24px;
  background-color: white;
  z-index: ${zIndex.header};
  position: sticky;
  top: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  > svg {
    margin-left: -2px;
  }
`;

export const OpenButton = styled(StyledButton)`
  ${breakpoint.lg`
      display: none;
    `}
`;

export const HeadTextWrapper = styled.div`
  display: none;
  ${breakpoint.lg`
    display: block;
    width: 100%;
  `}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const UserAction = styled.div`
  position: relative;
`;
