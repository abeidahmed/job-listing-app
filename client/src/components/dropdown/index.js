import React from "react";
import styled, { css } from "styled-components";
import Icon from "components/icon";

const DropdownWrapper = styled.div`
  position: absolute;
  top: 140%;
  right: -5%;
  margin-top: 4px;
  background-color: white;
  box-shadow: ${props => props.theme.shadow.medium};
  white-space: nowrap;
  border-radius: 4px;
  min-width: 150px;
  display: ${props => (props.isActive ? "block" : "none")};

  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.color.gray200};
    margin: 4px 0;
  }
`;

const DropdownInner = styled.div`
  margin: 4px 0;
`;

const styledLinks = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.color.gray700};
  line-height: 22px;
  font-size: 14px;
  padding-left: 16px;
  transition: 150ms all ease-in-out;
  outline: none;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.color.gray100};
  }

  > span {
    padding: 6px 0 6px 8px;
  }
`;

const Links = styled.a`
  ${styledLinks}
`;

const Button = styled.button`
  ${styledLinks}
  width: 100%;
`;

export const Dropdown = ({ links, isActive }) => {
  return (
    <DropdownWrapper isActive={isActive}>
      <DropdownInner>
        {links.map(link =>
          link.type === "link" ? (
            <Links key={link.id} href={link.path}>
              <Icon glyph={link.icon} width="20" height="20" />
              <span>{link.linkName}</span>
            </Links>
          ) : link.type === "button" ? (
            <Button key={link.id}>
              <Icon glyph={link.icon} width="20" height="20" />
              <span>{link.linkName}</span>
            </Button>
          ) : (
            <hr key={link.id} />
          )
        )}
      </DropdownInner>
    </DropdownWrapper>
  );
};
