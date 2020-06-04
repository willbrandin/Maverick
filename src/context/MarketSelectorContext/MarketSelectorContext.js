import createDataContext from "../createDataContext";
import raidersApi from "../../api/raidersApi";

import {
  FETCH_MARKETS,
  MARKET_SELECTED,
  CLEAR_ERRORS,
  SET_LOADING,
  SET_EMPTY_MARKETS,
} from "./MarketSelectorTypes";

const authReducer = (state, action) => {
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
        selectedMarket: null,
        availableMarkets: null,
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
    dispatch({ type: FETCH_MARKETS, payload: response.data });
  } catch (error) {
    console.log("Error Fetching Markets");
    console.log(error);
    dispatch({ type: SET_LOADING, payload: false });
  }
};

const selectedMarket = (dispatch) => (market) => {
  dispatch({ type: SET_LOADING, payload: true });

  setTimeout(() => {
    dispatch({ type: MARKET_SELECTED, payload: market });
  }, 0);
};

const clearErrors = (dispatch) => () => {
  dispatch({ type: CLEAR_ERRORS });
};

const setEmptyMarkets = (dispatch) => () => {
  dispatch({ type: SET_EMPTY_MARKETS });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { fetchMarkets, selectedMarket, clearErrors, setEmptyMarkets },
  {
    availableMarkets: [],
    selectedMarket: null,
    isLoading: false,
    errorMessage: "",
  }
);
