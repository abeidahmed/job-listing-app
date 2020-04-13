import { POST_USER_DATA } from "./types";

export const postUserAction = user => {
  return {
    type: POST_USER_DATA,
    user
  };
};
