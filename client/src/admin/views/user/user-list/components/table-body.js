import React, { useState } from "react";
import moment from "moment";
import { Dropdown } from "components/dropdown";
import Icon from "components/icon";
import { StyledButton } from "components/button";
import { Tbody, Td, Tr } from "components/table";
import { UserAction } from "./user-action";
import { UserProfile, NameWrapper, TableAction } from "./style";

export const TableBody = ({ allUsers }) => {
  const [isActive, setIsActive] = useState(false);
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
          <Td>Admin</Td>
          <Td>{moment(user.createdAt).format("Do MMM, YYYY")}</Td>
          <Td>42</Td>
          <Td hasDropdown>
            <TableAction>
              <StyledButton color="iconPrimary" iconOnlyPrimary onClick={() => setIsActive(true)}>
                <Icon glyph="dots-horizontal" />
              </StyledButton>
              <Dropdown isActive={isActive} onOutsideClick={() => setIsActive(false)}>
                <UserAction />
              </Dropdown>
            </TableAction>
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
};
