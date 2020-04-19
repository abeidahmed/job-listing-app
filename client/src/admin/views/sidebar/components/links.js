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
  const [active, setActive] = useState({});

  const handleClick = menu => {
    setActive(prevState => {
      const clicked = { ...prevState };

      clicked[menu] = !clicked[menu];
      return clicked;
    });
  };

  const linkArray = [
    {
      name: "Dashboard",
      icon: "home",
      path: "/"
    },
    {
      name: "Jobs",
      icon: "briefcase",
      path: "/",
      multiple: [
        {
          name: "View jobs",
          path: "/"
        },
        {
          name: "Post new job",
          path: "/"
        }
      ]
    },
    {
      name: "Events",
      icon: "calendar",
      path: "/",
      multiple: [
        {
          name: "View events",
          path: "/"
        },
        {
          name: "Post new event",
          path: "/"
        }
      ]
    },
    {
      name: "Users",
      icon: "users",
      path: "/"
    }
  ];

  return (
    <Nav>
      {linkArray.map(link =>
        !link.hasOwnProperty("multiple") ? (
          <LinkWrapper key={link.name} href={link.path}>
            <Icon glyph={link.icon} color="#9fa6b2" />
            <LinkText>{link.name}</LinkText>
          </LinkWrapper>
        ) : (
          <LinkContainer key={link.name}>
            <ButtonContainer onClick={() => handleClick(link.name)} isActive={active[link.name]}>
              <LinkTextWrapper>
                <Icon glyph={link.icon} color="#9FA6B2" />
                <LinkText>{link.name}</LinkText>
              </LinkTextWrapper>
              <Icon glyph="chevron-right" color="#9FA6B2" />
            </ButtonContainer>
            <InnerDropdown isActive={active[link.name]}>
              {link.multiple.map(subLink => (
                <a key={subLink.name} href={subLink.path}>
                  {subLink.name}
                </a>
              ))}
            </InnerDropdown>
          </LinkContainer>
        )
      )}
    </Nav>
  );
};

export default Links;
