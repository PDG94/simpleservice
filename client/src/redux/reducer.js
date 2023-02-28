// import { toast } from "react-toastify";
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
  // STORE_TOKEN,
  GET_SERVICES_LIST,
  GET_USERS,
  DELETE_USER,
  ADD_TO_CART,
  DECREASE_CART,
  REMOVE_CART,
  CLEAR_CART,
  CALCULATE_SUB_TOTAL,
  CALCULATE_TOTAL_QUANTITY,
  SAVE_URL,
  SAVE_SHIPPING_ADDRESS,
  SAVE_BILLING_ADDRESS,
  GET_SERVICE_USER,
  // USER_SESSION,
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
  serviceList: [],
  users: [],
  session: null,
  //CART
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  previousURL: "",
  //SUMMARY
  shippingAddress: {},
  billingAddress: {},
  serviceUser: [],
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

    case CLEAN_STATE:
      return {
        ...state,
        serviceDetail: action.payload,
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
        isLoggedIn: true,
        email: action.payload.email,
        useName: action.payload.useName,
        userID: action.payload.userID,
      };

    case REMOVE_USER:
      return {
        ...state,
        isLoggedIn: false,
        email: null,
        useName: null,
        userID: null,
      };

    // case STORE_TOKEN:
    //   return {
    //     ...state,
    //     token: action.payload,
    //   };

    case GET_SERVICES_LIST:
      return {
        ...state,
        serviceList: action.payload,
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case DELETE_USER:
      return { ...state };

    case ADD_TO_CART:
      return {...state, cartItems: action.payload }

    case DECREASE_CART:
      console.log([...action.payload])
      console.log(state)
      return {...state, cartItems: [...action.payload]}

    case REMOVE_CART:
      const prueba = {...state, cartItems:[...action.payload]}
      console.log(prueba)
      return {...prueba}

    case CLEAR_CART:
      return {...state, cartItems: action.payload}

    case CALCULATE_SUB_TOTAL:
      return {...state, cartTotalAmount: action.payload}

    case CALCULATE_TOTAL_QUANTITY:
      return {...state, cartTotalQuantity: action.payload}

    case SAVE_URL:
      return {...state, previousURL: action.payload}

    case SAVE_SHIPPING_ADDRESS:
      console.log(action.payload);
      return {...state, shippingAddress: action.payload}

    case SAVE_BILLING_ADDRESS:
      console.log(action.payload);
      return {
        ...state, billingAddress: action.payload
      }

    case GET_SERVICE_USER:
      return {
        ...state,
        serviceUser: action.payload,
      };

    // case USER_SESSION:
    //   return {
    //     ...state,
    //     session: action.payload,
    //   };
    default:
      return { ...state };
  }
}

export default rootReducer;
