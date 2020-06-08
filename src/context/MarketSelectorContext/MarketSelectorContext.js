import createDataContext from "../createDataContext";
import raidersApi from "../../api/raidersApi";

import {
  FETCH_MARKETS,
  MARKET_SELECTED,
  CLEAR_ERRORS,
  SET_LOADING,
  SET_EMPTY_MARKETS,
} from "./MarketSelectorTypes";

import * as RootNavigation from "../../utility/RootNavigation";

const marketReducer = (state, action) => {
  switch (action.type) {
    case FETCH_MARKETS:
      return {
        ...state,
        availableMarkets: action.payload,
        isLoading: false,
        errorMessage: "",
      };

    case MARKET_SELECTED:
      return {
        ...state,
        selectedMarket: action.payload,
        isLoading: false,
        errorMessage: "",
      };

    case CLEAR_ERRORS:
      return { ...state, errorMessage: "" };

    case SET_LOADING:
      return { ...state, isLoading: action.payload };

    case SET_EMPTY_MARKETS:
      return {
        ...state,
        selectedMarket: null,

        isLoading: false,
        errorMessage: "",
      };
    default:
      return state;
  }
};

const fetchMarkets = (dispatch) => async () => {
  dispatch({ type: SET_LOADING, payload: true });

  try {
    const response = await raidersApi.get("account/supportedmarkets");
    console.log(response.data);

    dispatch({ type: FETCH_MARKETS, payload: response.data });
  } catch (error) {
    console.log("Error Fetching Markets");
    console.log(error);
    dispatch({ type: SET_LOADING, payload: false });
  }
};

const selectedMarket = (dispatch) => (market) => {
  try {
    dispatch({ type: MARKET_SELECTED, payload: market });
  } catch (error) {
    console.log(error);
  }
};

const clearErrors = (dispatch) => () => {
  dispatch({ type: CLEAR_ERRORS });
};

const setEmptyMarkets = (dispatch) => async () => {
  try {
    await dispatch({ type: SET_EMPTY_MARKETS });
  } catch (error) {
    console.log(error);
  }
};

export const { Provider, Context } = createDataContext(
  marketReducer,
  { fetchMarkets, selectedMarket, clearErrors, setEmptyMarkets },
  {
    availableMarkets: [],
    selectedMarket: null,
    isLoading: false,
    errorMessage: "",
  }
);
