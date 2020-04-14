import React, { useEffect } from "react";
import { connect } from "react-redux";
import { pageHeadAction } from "actions/page-head";

const Dashboard = ({ pageHead }) => {
  useEffect(() => {
    const sendTitle = title => {
      pageHead(title);
    };

    sendTitle("Dashboard");
  }, [pageHead]);

  return (
    <div>
      <h1>hello from dashboard</h1>
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
)(Dashboard);
