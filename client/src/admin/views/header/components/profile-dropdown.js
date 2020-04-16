import React from "react";
import Icon from "components/icon";

export const UserDropdown = () => {
  return (
    <>
      <a href="/">
        <Icon glyph="user" width="20" height="20" />
        <span>Profile</span>
      </a>
      <a href="/">
        <Icon glyph="message" width="20" height="20" />
        <span>Inbox</span>
      </a>
      <a href="/">
        <Icon glyph="cog" width="20" height="20" />
        <span>Settings</span>
      </a>
      <hr />
      <button>
        <Icon glyph="sign-out" width="20" height="20" />
        <span>Signout</span>
      </button>
    </>
  );
};
