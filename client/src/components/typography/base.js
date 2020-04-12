import { css } from "styled-components";

export const StyledTypography = css`
  color: ${props =>
    props.color === "dark"
      ? props.theme.color.textDark
      : "gray"
      ? props.theme.color.textGray
      : "light"
      ? props.theme.color.textLight
      : props.theme.color.textLight};
  font-weight: ${props =>
    props.weight === "bold" ? "700" : "semibold" ? "500" : "400"};
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
      case "xl": {
        return css`
          font-size: 24px;
          line-height: 32px;
        `;
      }
      case "2xl": {
        return css`
          font-size: 30px;
          line-height: 38px;
        `;
      }
      case "3xl": {
        return css`
          font-size: 36px;
          line-height: 38px;
        `;
      }
      default:
        return css`
          font-size: 16px;
          line-height: 24px;
        `;
    }
  }};
`;
