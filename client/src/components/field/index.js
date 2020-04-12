import styled, { css } from "styled-components";

export const InputField = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.color.gray300};
  background-color: white;
  color: ${props => props.theme.color.gray800};
  outline: none;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  transition: 150ms all ease-in-out;

  ${props => {
    switch (props.size) {
      case "sm":
        return css`
          font-size: 14px;
          height: 36px;
        `;
      default:
        return css`
          font-size: 16px;
          height: 42px;
        `;
    }
  }}

  ${props => {
    switch (props.type) {
      case "danger":
        return css`
          border-color: ${props => props.theme.color.red600};
          color: ${props => props.theme.color.red800};
          &:focus {
            box-shadow: ${props => props.theme.shadow.outlineDanger};
          }
        `;
      default:
        return css`
          &:focus {
            border-color: ${props => props.theme.color.blue600};
            box-shadow: ${props => props.theme.shadow.outline};
          }
        `;
    }
  }}
`;
