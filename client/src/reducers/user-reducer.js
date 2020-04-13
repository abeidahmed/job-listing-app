import { POST_USER_DATA } from "actions/types";

const initialState = {
  user: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_DATA:
      return {
        user: action.user
      };
    default:
      return state;
  }
};
