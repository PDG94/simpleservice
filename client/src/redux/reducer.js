import {
  GET_SERVICES,
  GET_SERVICES_DETAIL,
  CLEANER_NAME,
  GET_BY_NAME,
  CLEAN_STATE,
} from "./actionTypes";

const initialState = {
  services: [],
  serviceDetail: [],
  isLoading: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };

    case GET_SERVICES_DETAIL:
      return {
        ...state,
        serviceDetail: action.payload,
      };

    case CLEAN_STATE:
      return {
        ...state,
        gamesDetail: action.payload,
      };

    case CLEANER_NAME:
      return {
        ...state,
        services: [],
      };

    case GET_BY_NAME:
      return {
        ...state,
        services: action.payload,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
