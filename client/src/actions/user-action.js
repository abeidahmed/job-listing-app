import {
  ALL_USERS_FETCH_ERROR,
  CLEAR_USER_ID,
  CURRENT_USER_FETCH_ERROR,
  FETCH_ALL_USERS,
  USERS_LOADING,
  CURRENT_USER_LOADING,
  LOGOUT_USER,
  POST_USER_DATA,
  SEARCH_USERS,
  SET_USER_ROLE,
  SET_USER_ID,
  SET_USERS_PAGE,
  SORT_USERS
} from "./types";

export const postUserAction = (user, token) => {
  return {
    type: POST_USER_DATA,
    payload: {
      user,
      token
    }
  };
};

export const currentUserFetchError = error => {
  return {
    type: CURRENT_USER_FETCH_ERROR,
    payload: error
  };
};

export const currentUserLoading = () => {
  return {
    type: CURRENT_USER_LOADING
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

export const getAllUsersAction = users => {
  return {
    type: FETCH_ALL_USERS,
    payload: users
  };
};

export const usersFetchError = error => {
  return {
    type: ALL_USERS_FETCH_ERROR,
    payload: error
  };
};

export const usersLoading = () => {
  return {
    type: USERS_LOADING
  };
};

export const setRole = role => {
  return {
    type: SET_USER_ROLE,
    payload: role
  };
};

export const searchUsers = value => {
  return {
    type: SEARCH_USERS,
    payload: value
  };
};

export const sortUsers = value => {
  return {
    type: SORT_USERS,
    payload: value
  };
};

export const setUserId = id => {
  return {
    type: SET_USER_ID,
    payload: id
  };
};

export const clearUserId = () => {
  return {
    type: CLEAR_USER_ID,
    payload: ""
  };
};

export const setUsersPage = page => {
  return {
    type: SET_USERS_PAGE,
    payload: page
  };
};
