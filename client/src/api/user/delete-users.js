import axios from "axios";
import { authToken } from "middleware/auth-token";
import { decrementUserCount } from "actions/user-action";

export const deleteUsers = () => (dispatch, getState) => {
  const id = getState().modalReducer.modalProps;
  axios
    .delete(`/api/v1/user/${id}`, authToken(getState))
    .then(() => {
      dispatch(decrementUserCount());
    })
    .catch(err => console.log(err));
};
