function authReducer(store = {}, action: any) {
  switch (action.type) {
    case "login":
      return action.description;
    case "logout":
      return {};
    default:
      return store;
  }
}

export default authReducer;
