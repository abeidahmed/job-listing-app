import { css } from "styled-components";

export const StyledTypography = css`
  color: ${props => (props.color ? `${props.color}` : props.theme.color.gray700)};
  ${props => {
    switch (props.size) {
      case "xs": {
        return css`
          font-size: 12px;
          line-height: 20px;
        `;
      }
      case "sm": {
        return css`
          font-size: 14px;
          line-height: 22px;
        `;
      }
      case "base": {
        return css`
          font-size: 16px;
          line-height: 24px;
        `;
      }
      case "lg": {
        return css`
          font-size: 20px;
          line-height: 28px;
        `;
      }
    }
  }}

  /* font-size: ${props => {
    switch (props.size) {
      case "xs": {
        return "12px";
      }
      case "sm": {
        return "14px";
      }
      case "base": {
        return "16px";
      }
      case "lg": {
        return "20px";
      }
      case "xl": {
        return "24px";
      }
      case "2xl": {
        return "30px";
      }
      case "3xl": {
        return "36px";
      }
      default:
        return "16px";
    }
  }};
  line-height: ${props => {
    switch (props.size) {
      case "xs": {
        return "20px";
      }
      case "sm": {
        return "22px";
      }
      case "base": {
        return "24px";
      }
      case "lg": {
        return "28px";
      }
      case "xl": {
        return "32px";
      }
      case "2xl": {
        return "38px";
      }
      case "3xl": {
        return "38px";
      }
      default:
        return "24px";
    }
  }}; */
`;
