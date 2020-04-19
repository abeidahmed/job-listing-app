import { combineReducers } from "redux";
import { currentUserReducer } from "./current-user-reducer";
import { pageHeadReducer } from "./page-head-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";

export const rootReducer = combineReducers({
  currentUserReducer,
  pageHeadReducer,
  sidebarReducer,
  usersReducer
});
