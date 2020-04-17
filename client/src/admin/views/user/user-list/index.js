import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchUsers, setRole, sortUsers } from "actions/user-action";
import { ActionButton } from "./components/action-button";
import { AdminContainer } from "components/layout";
import { closeModal, openModal } from "actions/modal";
import { DeleteModal } from "./components/delete-modal";
import { fetchAllUsers } from "api/user";
import Icon from "components/icon";
import Modal from "components/modal";
import { setPageTitle } from "actions/page-head";
import { Pagination } from "components/pagination";
import { SearchField } from "./components/search-field";
import { Table } from "components/table";
import { TableBody } from "./components/table-body";
import { TableHead } from "./components/table-head";
import { Spinner, PageHeadWrapper, MainContent } from "./style";

const UserList = ({
  allUsers,
  closeModal,
  error,
  isLoading,
  pageHead,
  fetchAllUsers,
  openModal,
  role,
  searchTerm,
  searchValue,
  sendRole,
  sort
}) => {
  const [sortByNameState, setSortByNameState] = useState(false);
  const [sortByJoinDate, setSortByJoinDate] = useState(false);

  useEffect(() => {
    const sendTitle = title => {
      pageHead(title);
    };

    sendTitle("Users");
  }, [pageHead]);

  // render users with each search query and filters
  useEffect(() => {
    const fetchUsers = () => {
      fetchAllUsers();
    };

    fetchUsers();
  }, [fetchAllUsers, role, searchValue, sortByNameState, sortByJoinDate]);

  return (
    <AdminContainer>
      <Modal onOutsideClick={closeModal}>
        <DeleteModal closeModal={closeModal} />
      </Modal>
      <PageHeadWrapper>
        <SearchField searchTerm={searchTerm} searchValue={searchValue} />
        <ActionButton sendRole={sendRole} />
      </PageHeadWrapper>
      {isLoading || error.length !== 0 ? (
        <Spinner>
          <Icon glyph="spinner" color="#1633ff" />
        </Spinner>
      ) : (
        <MainContent>
          <Table>
            <TableHead
              sort={sort}
              sortByNameState={sortByNameState}
              setSortByNameState={setSortByNameState}
              sortByJoinDate={sortByJoinDate}
              setSortByJoinDate={setSortByJoinDate}
            />
            <TableBody allUsers={allUsers} openModal={openModal} />
          </Table>
          <Pagination />
        </MainContent>
      )}
    </AdminContainer>
  );
};

const mapStateToProps = state => {
  const { users, isLoading, error, role, searchTerm, sortBy } = state.usersReducer;
  return {
    allUsers: users,
    isLoading: isLoading,
    error: error,
    role: role,
    searchValue: searchTerm,
    sortName: sortBy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pageHead: value => dispatch(setPageTitle(value)),
    fetchAllUsers: (value, search) => dispatch(fetchAllUsers(value, search)),
    sendRole: value => dispatch(setRole(value)),
    searchTerm: value => dispatch(searchUsers(value)),
    sort: array => dispatch(sortUsers(array)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
