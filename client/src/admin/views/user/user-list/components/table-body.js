import React from "react";
import moment from "moment";
import { Tbody, Td, Tr } from "components/table";
import { UserProfile, NameWrapper } from "./style";

export const TableBody = ({ allUsers }) => {
  return (
    <Tbody>
      {allUsers.map(user => (
        <Tr key={user._id}>
          <Td>
            <UserProfile>
              <img
                src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <NameWrapper>
                <span>{`${user.firstName} ${user.lastName}`}</span>
              </NameWrapper>
            </UserProfile>
          </Td>
          <Td>{user.email}</Td>
          <Td>{user.role}</Td>
          <Td>{moment(user.createdAt).format("Do MMM, YYYY")}</Td>
          <Td>42</Td>
          <Td hasLinks>
            <a href="/">Edit</a>
            {" | "}
            <a href="/">Delete</a>
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
};
