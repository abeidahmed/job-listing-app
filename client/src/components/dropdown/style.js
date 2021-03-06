import styled from "styled-components";
import { zIndex } from "helpers/z-index";

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0%;
  margin-top: 4px;
  background-color: white;
  box-shadow: ${props => props.theme.shadow.xlarge};
  white-space: nowrap;
  border-radius: 4px;
  min-width: 150px;
  display: ${props => (props.isActive ? "block" : "none")};
  z-index: ${zIndex.dropdown};

  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.color.gray200};
    margin: 4px 0;
  }

  a,
  button {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.color.gray700};
    line-height: 22px;
    font-size: 14px;
    padding-left: 16px;
    transition: 150ms all ease-in-out;
    outline: none;
    &:hover,
    &:focus {
      background-color: ${props => props.theme.color.gray100};
    }

    svg {
      padding-right: 8px;
    }

    > span {
      padding: 6px 0;
    }
  }
  button {
    width: 100%;
  }
`;

export const DropdownInner = styled.div`
  margin: 4px 0;
`;
