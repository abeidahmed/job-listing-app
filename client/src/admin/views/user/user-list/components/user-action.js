import React from "react";
import { Span } from "components/typography";

export const UserAction = () => {
  return (
    <>
      <a href="/">
        <Span size="sm">Edit</Span>
      </a>
      <hr />
      <a href="/">
        <Span size="sm">Ban user</Span>
      </a>
      <a href="/">
        <Span size="sm" color="danger">
          Delete user
        </Span>
      </a>
    </>
  );
};
