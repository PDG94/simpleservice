import {
  GET_SERVICES,
  GET_SERVICES_DETAIL,
  CLEANER_NAME,
  GET_BY_NAME,
  CLEAN_STATE,
  GET_CATEGORIES,
  FILTER_SERVICES,
  RESET_PAGED,
  SET_ACTIVE_USER,
  REMOVE_USER,
  STORE_TOKEN,
  GET_CART,
  MODIFY_CART,
} from "./actionTypes";

const initialState = {
  services: [],
  serviceDetail: [],
  isLoading: true,
  categories: [],
  currentPage: 1,
  isLoggedIn: false,
  email: null,
  useName: null,
  userID: null,
  token: "",
  cart: [],
  modifyCart: 0,
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
        serviceDetail: action.payload,
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

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case FILTER_SERVICES:
      return {
        ...state,
        services: action.payload,
      };

    case RESET_PAGED:
      return {
        ...state,
        currentPage: action.payload,
      };
      case SET_ACTIVE_USER:
      return {
        ...state,
        isLoggedIn:true ,
        email: action.payload.email,
        useName: action.payload.useName,
        userID: action.payload.userID 
      };
      case REMOVE_USER:
      return {
        ...state,
        isLoggedIn: false ,
        email: null,
        useName: null,
        userID: null
      };
      case STORE_TOKEN:
        return {
          ...state, token: action.payload
      };
      case GET_CART:
      return {
        ...state,
        cart: action.payload
      };
      case MODIFY_CART:
      return {
        ...state,
        modifyCart: action.payload.totalAmount,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
