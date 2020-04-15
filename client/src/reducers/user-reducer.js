import { POST_USER_DATA } from "actions/types";

const initialState = {
  currentUser: [],
  token: localStorage.getItem("token")
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_DATA:
      localStorage.setItem("token", action.token);
      return {
        ...state,
        ...action.payload,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
