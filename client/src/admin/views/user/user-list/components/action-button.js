import React, { useState } from "react";
import { connect } from "react-redux";
import { Dropdown } from "components/dropdown";
import Icon from "components/icon";
import { openModal } from "actions/modal";
import { RoleDropdown } from "./role-dropdown";
import { setRole } from "actions/user-action";
import { StyledButton } from "components/button";
import { ActionContainer, RoleSelect } from "./style";

const ActionButton = ({ openModal, sendRole }) => {
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
        <StyledButton color="primary" size="sm" onClick={() => openModal("ADD_USER")}>
          Add user
        </StyledButton>
      </div>
    </ActionContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modalType, modalProps) => dispatch(openModal(modalType, modalProps)),
    sendRole: value => dispatch(setRole(value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ActionButton);
