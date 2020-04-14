import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

export const PagiMobile = styled.div`
  ${breakpoint.md`
    display: none;
  `}
`;

export const PaginationText = styled.div`
  display: none;
  ${breakpoint.md`
    display: block;
  `}
`;

export const PaginationContainer = styled.ul`
  display: none;
  ${breakpoint.md`
    display: flex;
    align-items: center;
    font-size: 14px;

    button {
      padding: 8px 16px;
      display: inline-flex;
      align-items: center;
      border: 1px solid ${props => props.theme.color.gray300};
      position: relative;
      background-color: white;
      color: ${props => props.theme.color.gray700};

      &:focus {
        outline: none;
        border-color: ${props => props.theme.color.blue600};
        z-index: 10;
        box-shadow: ${props => props.theme.shadow.outline};
      }

      &:first-child,
      &:last-child {
        padding: 6px 8px;
      }

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      &:not(:first-child) {
        margin-left: -1px;
      }
    }

    span {
      padding: 8px 16px;
      display: inline-flex;
      align-items: center;
      border: 1px solid ${props => props.theme.color.gray300};
      margin-left: -1px;
      position: relative;
      background-color: white;
    }
    `}
`;
