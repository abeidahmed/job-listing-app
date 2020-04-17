import { PAGE_HEAD } from "./types";

export const setPageTitle = head => {
  return {
    type: PAGE_HEAD,
    payload: head
  };
};
