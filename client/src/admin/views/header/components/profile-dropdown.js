import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Icon from "components/icon";
import { logoutCurrentUser } from "api/user";

const UserDropdown = ({ logout }) => {
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    history.push("/");
  };

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
      <button onClick={handleLogout}>
        <Icon glyph="sign-out" width="20" height="20" />
        <span>Signout</span>
      </button>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutCurrentUser())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserDropdown);
