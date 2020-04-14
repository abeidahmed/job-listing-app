import React, { useEffect } from "react";
import { connect } from "react-redux";
import { pageHeadAction } from "actions/page-head";

const UserList = props => {
  useEffect(() => {
    props.pageHead("Users");
  }, []);
  return (
    <div>
      <h1>hell from user list</h1>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    pageHead: value => dispatch(pageHeadAction(value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserList);
