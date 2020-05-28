import createDataContext from "../createDataContext";

import { AUTH_ERROR, USER_SIGN_IN, CLEAR_ERRORS, SIGN_OUT } from "./AuthTypes";

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };

    case USER_SIGN_IN:
      return { token: action.payload, errorMessage: "" };

    case CLEAR_ERRORS:
      return { ...state, errorMessage: "" };

    case SIGN_OUT:
      return { token: null, errorMessage: "" };

    default:
      return state;
  }
};

const signIn = (dispatch) => async (pinNumber) => {
  let token;
  token = `asfjalsdfjalfd`;
  console.log(pinNumber);
  dispatch({ type: USER_SIGN_IN, payload: token });
};

const clearErrors = (dispatch) => () => {
  dispatch({ type: CLEAR_ERRORS });
};

const signOut = (dispatch) => () => {
  dispatch({ type: SIGN_OUT });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, clearErrors },
  { token: null, errorMessage: "" }
);
