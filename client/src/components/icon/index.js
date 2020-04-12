import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.width ? `${props.width}px` : "24px")};
  height: ${props => (props.height ? `${props.height}px` : "24px")};
`;

const Glyph = ({ glyph, color }) => {
  switch (glyph) {
    case "chevron-down":
      return (
        <g>
          <path
            d="M16.939 7.939L12 12.879L7.06096 7.939L4.93896 10.061L12 17.121L19.061 10.061L16.939 7.939Z"
            fill={color}
          />
        </g>
      );
    case "clock-solid":
      return (
        <g>
          <path
            fill={color}
            d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM15.293 16.707L11 12.414V6H13V11.586L16.707 15.293L15.293 16.707Z"
          />
        </g>
      );
    case "dollar":
      return (
        <g>
          <path
            fill={color}
            d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
          />
          <path
            fill={color}
            d="M12 11C10 11 10 10.374 10 9.99999C10 9.51599 10.701 8.99999 12 8.99999C13.185 8.99999 13.386 9.63799 13.4 10.018L14.4 9.99999H15.4C15.4 8.97399 14.734 7.53099 13 7.12099V6.01199H11V7.08499C9.029 7.41599 8 8.71199 8 9.99999C8 11.12 8.52 13 12 13C14 13 14 13.676 14 14C14 14.415 13.38 15 12 15C10.159 15 10.011 14.143 10 14H8C8 14.918 8.661 16.553 11 16.92V18H13V16.915C14.971 16.584 16 15.288 16 14C16 12.88 15.48 11 12 11Z"
          />
        </g>
      );
    case "briefcase":
      return (
        <g>
          <path
            fill={color}
            d="M20 6H17V4C17 2.897 16.103 2 15 2H9C7.897 2 7 2.897 7 4V6H4C2.897 6 2 6.897 2 8V11H22V8C22 6.897 21.103 6 20 6ZM9 4H15V6H9V4ZM14 14H10V12H2V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V12H14V14Z"
          />
        </g>
      );
    case "zap":
      return (
        <g>
          <path
            d="M20.9799 11.802C20.9039 11.424 20.6169 11.123 20.2419 11.031L13.3819 9.31499L15.9189 3.39399C16.1009 2.97099 15.9699 2.47799 15.6019 2.20199C15.2329 1.92299 14.7229 1.93399 14.3679 2.22599L3.36794 11.226C3.07494 11.466 2.94194 11.85 3.02494 12.219C3.10694 12.588 3.39094 12.879 3.75794 12.97L10.4769 14.651L7.13194 20.505C6.89694 20.917 6.98294 21.437 7.33794 21.751C7.52594 21.916 7.76294 22 7.99994 22C8.21094 22 8.42194 21.934 8.59994 21.8L20.5999 12.8C20.9079 12.568 21.0569 12.181 20.9799 11.802Z"
            fill={color}
          />
        </g>
      );
  }
};

const Icon = ({ glyph, color, height, width }) => {
  console.log(color);
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={height} width={width}>
      <Glyph fill="none" color={color} glyph={glyph} />
    </Svg>
  );
};

export default Icon;
