import React from "react";
import { connect } from "react-redux";
import { sortUsers } from "actions/user-action";
import { Th, Tr } from "components/table";

const TableHead = ({
  sort,
  setSortByNameState,
  sortByNameState,
  setSortByJoinDate,
  sortByJoinDate
}) => {
  const sortingFunc = async type => {
    if (type === "name") {
      await setSortByNameState(!sortByNameState);

      if (sortByNameState) sort("firstName_asc");

      sort("firstName_desc");
    } else if (type === "date") {
      await setSortByJoinDate(!sortByJoinDate);

      if (sortByJoinDate) sort("createdAt_asc");

      sort("createdAt_desc");
    }
  };

  return (
    <thead>
      <Tr>
        <Th hasButton title="Name" onClick={() => sortingFunc("name")} />
        <Th title="Email address" />
        <Th title="Role" />
        <Th hasButton title="Joined on" onClick={() => sortingFunc("date")} />
        <Th hasButton title="Job listing" />
        <Th></Th>
      </Tr>
    </thead>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    sort: array => dispatch(sortUsers(array))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TableHead);
