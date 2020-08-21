import * as actions from "./authActions";
const initialState = {
  loggedIn: false,
  loggingIn: false,
  errors: {},
  user: null,
};

function authReducer(store = initialState, action: any) {
  switch (action.type) {
    case actions.LOGGING_IN:
      return { loggedIn: false, loggingIn: true, errors: {}, user: null };
    case actions.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loggingIn: false,
        errors: {},
        user: action.payload,
      };
    case actions.LOGOUT:
      return initialState;
    case actions.LOGIN_FAILED:
      return {
        loggedIn: false,
        loggingIn: false,
        errors: action.payload,
        user: null,
      };
    default:
      return store;
  }
}

export default authReducer;
