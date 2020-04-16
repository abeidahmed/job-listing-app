import {
  ALL_USERS_FETCH_ERROR,
  CURRENT_USER_FETCH_ERROR,
  FETCH_ALL_USERS,
  IS_LOADING_WHILE_USERS_FETCH,
  IS_LOADING_WHILE_CURRENT_USER_FETCH,
  LOGOUT_USER,
  POST_USER_DATA
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

export const isLoadingWhileCurrentUserFetch = () => {
  return {
    type: IS_LOADING_WHILE_CURRENT_USER_FETCH
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

export const allUsersFetchError = error => {
  return {
    type: ALL_USERS_FETCH_ERROR,
    payload: error
  };
};

export const isLoadingWhileUsersFetch = () => {
  return {
    type: IS_LOADING_WHILE_USERS_FETCH
  };
};
