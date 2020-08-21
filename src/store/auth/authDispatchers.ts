import * as actions from "./authActions";
import Store from "./../store";
import axios from "axios";

export const logout = () => {
  return {
    type: actions.LOGOUT,
  };
};

export const loginSuccess = (loginInfo: any) => {
  return {
    type: actions.LOGIN_SUCCESS,
    payload: loginInfo,
  };
};

export const loginFailed = (errors: any) => {
  return {
    type: actions.LOGIN_FAILED,
    payload: errors,
  };
};

export const loggingIn = () => ({
  type: actions.LOGGING_IN,
});

interface Icredentials {
  username: string;
  password: string;
}

export const tryLoggingIn = (credentials: Icredentials) => async () => {
  Store.dispatch(loggingIn());
  const res = await axios.post(
    "http://edu-forum-backend.herokuapp.com/api/auth/login",
    {
      username: credentials.username,
      password: credentials.password,
    }
  );
  const data = await res.data.json();
  alert(data.toString());
  Store.dispatch(loginSuccess(data));
};
