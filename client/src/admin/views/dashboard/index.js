import React, { useEffect } from "react";
import { connect } from "react-redux";
import { pageHeadAction } from "actions/page-head";

const Dashboard = props => {
  useEffect(() => {
    props.setPageHead("Dashboard");
  }, []);

  return (
    <div>
      <h1>hello from dashboard</h1>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setPageHead: value => dispatch(pageHeadAction(value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
