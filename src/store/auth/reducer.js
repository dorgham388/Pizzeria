import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
} from "./actionTypes";

const initialState = {
  registerLoading: false,
  isAuthenticated: false,
  signupErrors: [],
  user: {},
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        signupErrors: [],
        registerLoading: true,
      };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
      };
    case USER_REGISTER_ERROR:
      return {
        ...state,
        registerLoading: false,
        signupErrors: payload,
      };

    default:
      return state;
  }
};
export default authReducer;
