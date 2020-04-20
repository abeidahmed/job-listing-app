import { SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL, SET_ROLE, SET_PASSWORD } from "actions/types";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  role: "User",
  password: ""
};

export const createUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.firstName
      };
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: action.lastName
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case SET_ROLE:
      return {
        ...state,
        role: action.role
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    default:
      return state;
  }
};
