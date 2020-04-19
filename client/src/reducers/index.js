import { combineReducers } from "redux";
import { currentUserReducer } from "./current-user-reducer";
import { modalReducer } from "./modal-reducer";
import { pageHeadReducer } from "./page-head-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";

export const rootReducer = combineReducers({
  currentUserReducer,
  modalReducer,
  pageHeadReducer,
  sidebarReducer,
  usersReducer
});
