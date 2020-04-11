import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "../assets/stylesheet/index.css";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    font-family:  "Sailec", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
                  Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                  "Noto Color Emoji";
    color: ${props => props.theme.color.gray800};
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /** Headings **/
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1rem;
    font-weight: normal;
  }
`;
