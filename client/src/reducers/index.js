import { combineReducers } from "redux";
import { pageHeadReducer } from "./page-head-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { userReducer } from "./user-reducer";

export const rootReducer = combineReducers({
  pageHeadReducer,
  sidebarReducer,
  userReducer
});
