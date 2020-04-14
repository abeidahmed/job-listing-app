import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";
import { StyledButton } from "components/button";

// header
export const HeaderWrapper = styled.header`
  height: 64px;
  display: flex;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  > img {
    height: 32px;
    width: auto;
  }
`;

export const CloseButton = styled(StyledButton)`
  ${breakpoint.lg`
      display: none;
  `}
`;

// links
export const Nav = styled.nav`
  margin: 12px 0;
  flex: 1;
  padding: 0 24px;
  overflow-y: auto;
`;

export const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 12px 0;
`;

export const LinkContainer = styled.div`
  padding: 12px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  cursor: pointer;
`;

export const InnerDropdown = styled.div`
  margin-left: 32px;
  margin-top: 8px;
  display: ${props => (props.isActive ? "block" : "none")};

  > a {
    display: block;
    text-decoration: none;
    font-size: 14px;
    line-height: 22px;
    padding: 4px 0;
    color: ${props => props.theme.color.gray600};
  }
`;

export const LinkText = styled.span`
  padding-left: 8px;
  color: ${props => props.theme.color.gray700};
`;

export const LinkTextWrapper = styled.p`
  display: flex;
  align-items: center;
`;
