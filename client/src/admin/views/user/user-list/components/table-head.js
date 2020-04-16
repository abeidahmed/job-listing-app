import React from "react";
import { Th, Tr } from "components/table";

export const TableHead = () => {
  return (
    <thead>
      <Tr>
        <Th hasButton title="Name" />
        <Th title="Email address" />
        <Th title="Role" />
        <Th hasButton title="Joined on" />
        <Th hasButton title="Job listing" />
        <Th></Th>
      </Tr>
    </thead>
  );
};
