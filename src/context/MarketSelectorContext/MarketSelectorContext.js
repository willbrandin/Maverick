import createDataContext from "../createDataContext";
import {
  FETCH_MARKETS,
  MARKET_SELECTED,
  CLEAR_ERRORS,
  SET_LOADING,
} from "./MarketSelectorTypes";

const authReducer = (state, action) => {
  console.log(action);

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
      return { ...state, isLoading: action.payload, errorMessage: "" };

    default:
      return state;
  }
};

const fetchMarkets = (dispatch) => async () => {
  dispatch({ type: SET_LOADING, payload: true });

  try {
    setTimeout(() => {
      dispatch({
        type: FETCH_MARKETS,
        payload: [
          {
            marketId: 1,
            marketName: "Tide Cleaners Anderson",
            marketState: "OH",
            processorId: 1,
          },
          {
            marketId: 2,
            marketName: "GO Garage",
            marketState: "OH",
            processorId: 1,
          },
          {
            marketId: 3,
            marketName: "Tide Cleaners Dallas",
            marketState: "TX",
            processorId: 4,
          },
          {
            marketId: 4,
            marketName: "Tide Cleaners Mason",
            marketState: "OH",
            processorId: 5,
          },
          {
            marketId: 5,
            marketName: "Tide Cleaners Blue Ash",
            marketState: "OH",
            processorId: 5,
          },
          {
            marketId: 6,
            marketName: "QA Test Market",
            marketState: "TX",
            processorId: 0,
          },
          {
            marketId: 7,
            marketName: "Logan Market",
            marketState: "TX",
            processorId: 4,
          },
          {
            marketId: 11,
            marketName: "Los Angeles",
            marketState: "CA",
            processorId: 0,
          },
          {
            marketId: 15,
            marketName: "Tide Cleaners Seattle",
            marketState: "WA",
            processorId: 11,
          },
        ],
      });
    }, 0);
  } catch {
    console.log("error");
  }
};

const selectedMarket = (dispatch) => (market) => {
  dispatch({ type: SET_LOADING, payload: true });

  console.log("DID SET");
  console.log(market);
  setTimeout(() => {
    dispatch({ type: MARKET_SELECTED, payload: market });
  }, 0);
};

const clearErrors = (dispatch) => () => {
  dispatch({ type: CLEAR_ERRORS });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { fetchMarkets, selectedMarket, clearErrors },
  {
    availableMarkets: [],
    selectedMarket: null,
    isLoading: false,
    errorMessage: "",
  }
);
