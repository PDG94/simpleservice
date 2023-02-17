import {
  GET_SERVICES,
  GET_DETAIL,
  CLEAN_DETAIL,
  CLEANER_NAME,
  GET_BY_NAME,
} from "./actionTypes";

const initialState = {
  services: [],
  detail: [],
  isLoading: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
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

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
