import { combineReducers } from "redux";
import authReducer from "./authReducer";
import twitsReducer from "./twitsReducer";
import logsReducer from "./logsReducer";

export default combineReducers({
  twits: twitsReducer,
  logs: logsReducer,
  auth: authReducer
});
