import { SET_USER_DATA } from "./types";

export const setUserData = (field, value) => {
  return {
    type: SET_USER_DATA,
    field: field,
    payload: value
  };
};
