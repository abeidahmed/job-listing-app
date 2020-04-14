import React from "react";
import styled from "styled-components";
import Icon from "components/icon";
import { StyledButton } from "components/button";

const NotificationButton = styled(StyledButton)`
  position: relative;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    width: 18px;
    border-radius: 9999px;
    background-color: ${props => props.theme.color.blue600};
    color: white;
    font-size: 12px;
    position: absolute;
    top: -4px;
    right: -4px;
  }
`;

export const PillWithNumber = ({ glyph, number }) => {
  return (
    <NotificationButton color="iconPrimary" iconOnlyPrimary>
      <Icon glyph={glyph} />
      <span>{number}</span>
    </NotificationButton>
  );
};
