import React from "react";
import { Th, Tr } from "components/table";

export const TableHead = ({
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
