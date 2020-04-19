import { OPEN_MODAL, SHOW_MODAL } from "./types";

export const openModal = (modalType, modalProps) => {
  return {
    type: OPEN_MODAL,
    modalType,
    modalProps
  };
};

export const closeModal = () => {
  return {
    type: SHOW_MODAL
  };
};
