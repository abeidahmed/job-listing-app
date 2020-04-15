import { FETCH_ALL_USERS, POST_USER_DATA } from "./types";

export const postUserAction = (user, token) => {
  return {
    type: POST_USER_DATA,
    payload: {
      user,
      token
    }
  };
};

export const getAllUsersAction = users => {
  return {
    type: FETCH_ALL_USERS,
    payload: users
  };
};
