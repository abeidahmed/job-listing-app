import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchUsers, setRole, setUserId, sortUsers } from "actions/user-action";
import { ActionButton } from "./components/action-button";
import { AdminContainer } from "components/layout";
import { closeModal, openModal } from "actions/modal";
import { DeleteModal } from "./components/delete-modal";
import { deleteUsers, fetchAllUsers } from "api/user";
import Icon from "components/icon";
import Modal from "components/modal";
import { setPageTitle } from "actions/page-head";
import Pagination from "./components/pagination";
import { SearchField } from "./components/search-field";
import { Table } from "components/table";
import { TableBody } from "./components/table-body";
import { TableHead } from "./components/table-head";
import { Spinner, PageHeadWrapper, MainContent } from "./style";

const UserList = ({
  allUsers,
  closeModal,
  deleteUser,
  error,
  isLoading,
  page,
  pageHead,
  fetchAllUsers,
  openModal,
  role,
  searchTerm,
  searchValue,
  sendRole,
  setUserId,
  sort,
  userId
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
  }, [fetchAllUsers, page, userId, role, searchValue, sortByNameState, sortByJoinDate]);

  return (
    <AdminContainer>
      <Modal onOutsideClick={closeModal}>
        <DeleteModal closeModal={closeModal} deleteUser={deleteUser} />
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
            <TableBody allUsers={allUsers} openModal={openModal} setUserId={setUserId} />
          </Table>
          <Pagination />
        </MainContent>
      )}
    </AdminContainer>
  );
};

const mapStateToProps = state => {
  const { users, page, userId, isLoading, error, role, searchTerm, sortBy } = state.usersReducer;
  return {
    allUsers: users,
    error,
    isLoading,
    page,
    role,
    searchValue: searchTerm,
    sortName: sortBy,
    userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    deleteUser: () => dispatch(deleteUsers()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    openModal: () => dispatch(openModal()),
    pageHead: value => dispatch(setPageTitle(value)),
    searchTerm: value => dispatch(searchUsers(value)),
    sendRole: value => dispatch(setRole(value)),
    setUserId: id => dispatch(setUserId(id)),
    sort: array => dispatch(sortUsers(array))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
