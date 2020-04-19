import axios from "axios";
import { authToken } from "middleware/auth-token";
import { clearUserId } from "actions/user-action";

export const deleteUsers = () => (dispatch, getState) => {
  const id = getState().modalReducer.modalProps;
  axios
    .delete(`/api/v1/user/${id}`, authToken(getState))
    .then(() => dispatch(clearUserId()))
    .catch(err => console.log(err));
};
