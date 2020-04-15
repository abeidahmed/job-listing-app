import React from "react";
import Icon from "components/icon";
import { Span } from "components/typography";
import { StyledAvatar } from "./style";

export const AvatarWithText = ({ img, text, ...props }) => {
  return (
    <StyledAvatar {...props}>
      <img src={img} alt={text} />
      <span>
        <Span style={{ paddingLeft: 8 }} size="sm" color="gray">
          {text}
        </Span>
        <Icon glyph="chevron-down" width="20" height="20" />
      </span>
    </StyledAvatar>
  );
};
