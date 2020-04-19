import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "./types";

export const openSidebar = () => {
  return {
    type: OPEN_SIDEBAR,
    payload: true
  };
};

export const closeSidebar = () => {
  return {
    type: CLOSE_SIDEBAR
  };
};
