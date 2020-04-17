import React, { useState } from "react";
import { Dropdown } from "components/dropdown";
import Icon from "components/icon";
import { RoleDropdown } from "./role-dropdown";
import { StyledButton } from "components/button";
import { ActionContainer, RoleSelect } from "./style";

export const ActionButton = ({ sendRole }) => {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("All users");
  return (
    <ActionContainer>
      <RoleSelect>
        <StyledButton size="sm" color="bordered" iconRight onClick={() => setIsActive(true)}>
          {name}
          <Icon glyph="chevron-down" width="20" height="20" />
        </StyledButton>
        <Dropdown isActive={isActive} onOutsideClick={() => setIsActive(false)}>
          <RoleDropdown sendRole={sendRole} setName={setName} />
        </Dropdown>
      </RoleSelect>
      <div>
        <StyledButton color="primary" size="sm">
          Add user
        </StyledButton>
      </div>
    </ActionContainer>
  );
};
