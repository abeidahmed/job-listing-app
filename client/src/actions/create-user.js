import { CLEAR_USER_DATA, SET_USER_DATA } from "./types";

export const setUserData = (field, value) => {
  return {
    type: SET_USER_DATA,
    field: field,
    payload: value
  };
};

export const clearUserData = () => {
  return {
    type: CLEAR_USER_DATA
  };
};
