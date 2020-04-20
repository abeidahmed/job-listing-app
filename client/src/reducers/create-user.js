import { CLEAR_USER_DATA, SET_USER_DATA } from "actions/types";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  role: "User",
  password: ""
};

export const createUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        [action.field]: action.payload
      };
    case CLEAR_USER_DATA:
      return {
        initialState
      };
    default:
      return state;
  }
};
