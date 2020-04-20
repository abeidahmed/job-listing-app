import { CLEAR_USER_DATA, SET_USER_DATA, INCREMENT_TOTAL_USER } from "./types";

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

export const incrementUserCount = () => {
  return {
    type: INCREMENT_TOTAL_USER
  };
};
