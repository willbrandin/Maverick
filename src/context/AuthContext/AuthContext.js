import createDataContext from "../createDataContext";
import raidersApi from "../../api/raidersApi";
import { AsyncStorage } from "react-native";

import jwtDecode from "jwt-decode";

import {
  AUTH_ERROR,
  USER_SIGN_IN,
  CLEAR_ERRORS,
  SIGN_OUT,
  SET_LOADING,
} from "./AuthTypes";

import * as RootNavigation from "../../utility/RootNavigation";

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, isLoading: false, errorMessage: action.payload };

    case USER_SIGN_IN:
      return {
        token: action.payload.token,
        accountName: action.payload.accountName,
        accountSub: action.payload.accountSub,
        isLoading: false,
        errorMessage: "",
      };

    case CLEAR_ERRORS:
      return { ...state, errorMessage: "" };

    case SIGN_OUT:
      return {
        token: null,
        accountName: null,
        accountSub: null,
        isLoading: false,
        errorMessage: "",
      };

    case SET_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

const signIn = (dispatch) => async (pinNumber) => {
  let token;
  console.log(pinNumber);

  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await raidersApi.post("login/createtoken", {
      passcode: pinNumber,
    });

    token = response.data.access_token;
    const decoded = jwtDecode(token);

    AsyncStorage.setItem("AUTH_TOKEN_KEY", token);
    dispatch({
      type: USER_SIGN_IN,
      payload: {
        token,
        accountName: decoded.given_name,
        accountSub: decoded.sub,
      },
    });
    RootNavigation.reset("MarketSelector");
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
    console.log("Error Signing Out");
    console.log(error);
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, clearErrors },
  {
    token: null,
    accountName: null,
    accountSub: null,
    isLoading: false,
    errorMessage: "",
  }
);
