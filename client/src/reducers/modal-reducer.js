import { OPEN_MODAL, CLOSE_MODAL } from "actions/types";

const initialState = {
  isActive: false
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isActive: action.payload
      };
    case CLOSE_MODAL:
      return {
        isActive: action.payload
      };
    default:
      return state;
  }
};
