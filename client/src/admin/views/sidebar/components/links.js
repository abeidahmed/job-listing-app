import React, { useState } from "react";
import Icon from "components/icon";
import {
  Nav,
  LinkWrapper,
  LinkContainer,
  ButtonContainer,
  InnerDropdown,
  LinkText,
  LinkTextWrapper
} from "./style";

const Links = () => {
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  return (
    <Nav>
      <LinkWrapper href="/">
        <Icon glyph="home" color="#9fa6b2" />
        <LinkText>Dashboard</LinkText>
      </LinkWrapper>
      <LinkContainer>
        <ButtonContainer onClick={() => setDrop1(!drop1)}>
          <LinkTextWrapper>
            <Icon glyph="briefcase" color="#9FA6B2" />
            <LinkText>Jobs</LinkText>
          </LinkTextWrapper>
          <p>
            <Icon glyph={drop1 ? "chevron-down" : "chevron-right"} color="#9FA6B2" />
          </p>
        </ButtonContainer>
        <InnerDropdown isActive={drop1}>
          <a href="/">View jobs</a>
          <a href="/">Post new job</a>
        </InnerDropdown>
      </LinkContainer>
      <LinkContainer>
        <ButtonContainer onClick={() => setDrop2(!drop2)}>
          <LinkTextWrapper>
            <Icon glyph="calendar" color="#9FA6B2" />
            <LinkText>Events</LinkText>
          </LinkTextWrapper>
          <p>
            <Icon glyph={drop2 ? "chevron-down" : "chevron-right"} color="#9FA6B2" />
          </p>
        </ButtonContainer>
        <InnerDropdown isActive={drop2}>
          <a href="/">View events</a>
          <a href="/">Post new event</a>
        </InnerDropdown>
      </LinkContainer>
      <LinkWrapper href="/">
        <Icon glyph="users" color="#9fa6b2" />
        <LinkText>Users</LinkText>
      </LinkWrapper>
    </Nav>
  );
};

export default Links;
