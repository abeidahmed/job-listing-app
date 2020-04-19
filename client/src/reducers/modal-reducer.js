import { OPEN_MODAL, SHOW_MODAL } from "actions/types";

const initialState = {
  modalType: null,
  modalProps: {}
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case SHOW_MODAL:
      return {
        initialState
      };
    default:
      return state;
  }
};
