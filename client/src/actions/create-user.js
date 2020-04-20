import { SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL, SET_ROLE, SET_PASSWORD } from "./types";

export const setFirstName = firstName => {
  return {
    type: SET_FIRST_NAME,
    firstName
  };
};

export const setLastName = lastName => {
  return {
    type: SET_LAST_NAME,
    lastName
  };
};

export const setEmail = email => {
  return {
    type: SET_EMAIL,
    email
  };
};

export const setRole = role => {
  return {
    type: SET_ROLE,
    role
  };
};

export const setPassword = password => {
  return {
    type: SET_PASSWORD,
    password
  };
};
