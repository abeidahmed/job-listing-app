import styled from "styled-components";

// search bar
export const SearchWrapper = styled.div`
  max-width: 300px;
  width: 100%;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 99999px;
  }
`;

export const NameWrapper = styled.div`
  margin-left: 12px;
`;

export const TableAction = styled.div`
  position: relative;
`;

// role select

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;

  div:not(:first-child) {
    margin-left: 12px;
  }
`;

export const RoleSelect = styled.div`
  position: relative;
`;
