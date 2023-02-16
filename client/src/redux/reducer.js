import {
  GET_SERVICES,
  GET_DETAIL,
  CLEAN_DETAIL,
  CLEANER_NAME,
  GET_BY_NAME,
} from "./actionTypes";

const initialState = {
  services: [
    {
      id: 1,
      name: "Edwards",
      image: "image",
      price: 2000,
      activity: "Developer",
    },
    {
      id: 2,
      name: "Magali",
      image: "image",
      price: 4000,
      activity: "Developer",
    },
    {
      id: 3,
      name: "Ash",
      image: "image",
      price: 8000,
      activity: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: 5000,
      activity: "Developer",
    },
  ],
  detail: [],
  isLoading: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
        isLoading: action.payload,
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
