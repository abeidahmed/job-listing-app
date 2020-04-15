import React from "react";
import { Dropdown } from "components/dropdown";

const links = [
  { id: 1, type: "link", linkName: "Profile", icon: "user", path: "/" },
  { id: 2, type: "link", linkName: "Inbox", icon: "message", path: "/" },
  { id: 3, type: "link", linkName: "Settings", icon: "cog", path: "/" },
  { id: 4, hr: true },
  { id: 5, type: "button", linkName: "Signout", icon: "sign-out", path: "/" }
];

export const UserDropdown = ({ isActive }) => {
  return <Dropdown links={links} isActive={isActive} />;
};
