import styled from "styled-components";
import { breakpoint } from "utils/breakpoint";
import { InputField } from "components/field";
import { Para } from "components/typography";
import { StyledButton } from "components/button";

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

// add modal
export const FormContainer = styled.div`
  margin-top: 24px;
  > div:not(:first-child) {
    margin-top: 20px;
  }
`;

export const FormGroup = styled.div`
  ${breakpoint.md`
    display: flex;
  `}
`;

export const Input = styled(InputField)`
  margin-top: 4px;
  ${breakpoint.md`
    margin-top: 0;
  `}
`;

export const Button = styled(StyledButton)`
  display: block;
  width: 100%;
  &:not(:first-child) {
    margin-top: 12px;
  }

  ${breakpoint.sm`
    width: auto;
    &:not(:first-child) {
      margin-top: 0;
      margin-right: 16px;
    }
  `}
`;

// delete modal
export const TopWrapper = styled.div`
  text-align: center;
  ${breakpoint.sm`
    display: flex;
    text-align: left;
  `}
`;

export const ModalText = styled.div`
  margin-top: 20px;
  ${breakpoint.sm`
    margin-left: 16px;
    margin-top: 0;
  `}
`;

export const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 99999px;
  background-color: ${props => props.theme.color.red300};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const StyledPara = styled(Para)`
  margin-top: 8px;
`;

export const DeleteButton = styled(StyledButton)`
  display: block;
  width: 100%;
  &:not(:first-child) {
    margin-top: 12px;
  }

  ${breakpoint.sm`
    width: auto;
    &:not(:first-child) {
      margin-top: 0;
      margin-right: 16px;
    }
  `}
`;
