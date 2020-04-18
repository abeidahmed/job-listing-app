import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";

// search bar
export const SearchWrapper = styled.div`
  max-width: 300px;
  width: 100%;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 99999px;
  }
`;

export const NameWrapper = styled.div`
  margin-left: 12px;
`;

export const TableAction = styled.div`
  position: relative;
`;

// role select

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;

  div:not(:first-child) {
    margin-left: 12px;
  }
`;

export const RoleSelect = styled.div`
  position: relative;
`;

// pagination
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
      font-weight: 500;
      color: ${props => props.theme.color.gray600};
      transition: 150ms all ease-in-out;

      &:focus {
        outline: none;
        border-color: ${props => props.theme.color.blue600};
        z-index: 10;
        box-shadow: ${props => props.theme.shadow.outline};
      }

      &:hover {
        color: ${props => props.theme.color.gray500};
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

      &.active {
        color: ${props => props.theme.color.blue700};
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
