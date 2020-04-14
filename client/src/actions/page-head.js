import { PAGE_HEAD } from "./types";

export const pageHeadAction = head => {
  return {
    type: PAGE_HEAD,
    payload: head
  };
};
