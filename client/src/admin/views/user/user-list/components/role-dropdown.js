import React from "react";
import { Span } from "components/typography";

export const RoleDropdown = ({ sendRole, setName }) => {
  return (
    <>
      <button
        onClick={() => {
          sendRole(undefined);
          setName("All users");
        }}
      >
        <Span size="sm">All users</Span>
      </button>
      <button
        onClick={() => {
          sendRole("Admin");
          setName("Admins");
        }}
      >
        <Span size="sm">Admin</Span>
      </button>
      <button
        onClick={() => {
          sendRole("Employer");
          setName("Employers");
        }}
      >
        <Span size="sm">Employers</Span>
      </button>
      <button
        onClick={() => {
          sendRole("User");
          setName("Users");
        }}
      >
        <Span size="sm">Users</Span>
      </button>
    </>
  );
};
