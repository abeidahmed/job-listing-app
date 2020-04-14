import { combineReducers } from "redux";
import { sidebarReducer } from "./sidebar-reducer";
import { userReducer } from "./user-reducer";

export const rootReducer = combineReducers({
  sidebarReducer,
  userReducer
});
