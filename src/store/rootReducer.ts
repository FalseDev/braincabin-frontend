import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import questionsReducer from "./questions/questionsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  questions: questionsReducer,
});

export default rootReducer;
