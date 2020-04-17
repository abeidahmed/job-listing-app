import { OPEN_MODAL, CLOSE_MODAL } from "./types";

export const openModal = () => {
  return {
    type: OPEN_MODAL,
    payload: true
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    payload: false
  };
};
