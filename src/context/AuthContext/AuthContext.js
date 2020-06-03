import createDataContext from "../createDataContext";
import raidersApi from "../../api/raidersApi";
import { AsyncStorage } from "react-native";

import {
  AUTH_ERROR,
  USER_SIGN_IN,
  CLEAR_ERRORS,
  SIGN_OUT,
  SET_LOADING,
} from "./AuthTypes";

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case USER_SIGN_IN:
      return { token: action.payload, isLoading: false, errorMessage: "" };

    case CLEAR_ERRORS:
      return { ...state, errorMessage: "" };

    case SIGN_OUT:
      return { token: null, errorMessage: "" };

    case SET_LOADING:
      return { ...state, isLoading: action.payload, errorMessage: "" };

    default:
      return state;
  }
};

const signIn = (dispatch) => async (pinNumber) => {
  let token;
  console.log(pinNumber);

  try {
    const response = await raidersApi.post("login/createtoken", {
      passcode: pinNumber,
    });

    token = response.data.access_token;
    AsyncStorage.setItem("AUTH_TOKEN_KEY", token);
    dispatch({ type: USER_SIGN_IN, payload: token });
  } catch (error) {
    console.log(error);

    dispatch({ type: AUTH_ERROR, payload: "Invalid Pin" });
  }
};

const clearErrors = (dispatch) => () => {
  dispatch({ type: CLEAR_ERRORS });
};

const signOut = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem("AUTH_TOKEN_KEY");
    dispatch({ type: SIGN_OUT });
  } catch (error) {
    console.log(error);
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, clearErrors },
  { token: null, isLoading: false, errorMessage: "" }
);
