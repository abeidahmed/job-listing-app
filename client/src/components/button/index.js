import styled, { css } from "styled-components";

const Button = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border-radius: 4px;
  outline: none;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  transition: 150ms all ease-in;
  white-space: nowrap;

 

  ${props => {
    switch (props.size) {
      case "sm":
        return css`
          font-size: 14px;
          line-height: 22px;
          padding: 6px 16px;
          height: 36px;
        `;
      default:
        return css`
          font-size: 16px;
          line-height: 24px;
          padding: 8px 16px;
          height: 42px;
        `;
    }
  }}

  ${props => {
    switch (props.type) {
      case "primary":
        return css`
          background-color: ${props => props.theme.color.blue600};
          color: white;
          &:hover,
          &:focus {
            background-color: ${props => props.theme.color.blue700};
          }
          ${props =>
            props.isLink &&
            css`
              a {
                color: white;
                text-decoration: none;
              }
            `}
        `;
      case "bordered":
        return css`
          background-color: transparent;
          color: ${props => props.theme.color.gray800};
          border-color: ${props => props.theme.color.gray300};
          &:hover,
          &:focus {
            border-color: ${props => props.theme.color.gray400};
          }
          ${props =>
            props.isLink &&
            css`
              a {
                color: ${props => props.theme.color.gray800};
                text-decoration: none;
              }
            `}
        `;
      default:
        return css`
          background-color: ${props => props.theme.color.gray300};
          color: ${props => props.theme.color.gray800};
        `;
    }
  }}

  ${props =>
    props.iconOnly &&
    css`
      padding-left: 10px;
      padding-right: 10px;
    `}

  ${props =>
    props.icon &&
    css`
      svg {
        margin-right: 4px;
      }
    `}
`;

export const StyledButton = styled.button`
  ${Button}
`;