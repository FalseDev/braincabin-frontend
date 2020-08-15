import redux from "redux";
import authReducer from "./authReducer";

const authStore = redux.createStore(authReducer);

export default authStore;
