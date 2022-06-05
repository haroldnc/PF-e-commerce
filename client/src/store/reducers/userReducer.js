export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQ":
      return { loading: true };
    case "USER_REGISTER_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_REGISTER_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_SIGNIN_REQ":
      return {loading: true};
    case "USER_SIGNIN_SUCCESS":
      return {loading: false, userInfo: action.payload}
    case "USER_SIGNIN_FAIL":
      return {loading: false, error: action.payload}
    default:
      return state;
  }
}


