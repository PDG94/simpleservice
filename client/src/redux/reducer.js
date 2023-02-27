import { toast } from "react-toastify";
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
  USER_SESSION,
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
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
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

    case STORE_TOKEN:
      console.log(action.payload)
      return {
        ...state,
        token: action.payload,
      };

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
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIndex >= 0) {
        // Item already exists in the cart
        // Increase the cartQuantity
        state.cartItems[productIndex].cartQuantity += 1;
        toast.info(`${action.payload.servicename} increased by one`, {
          position: "top-left",
        });
      } else {
        // Item doesn't exists in the cart
        // Add item to the cart
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "top-left",
        });
      }
      // save cart to LS
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      break;

    case DECREASE_CART:
      const productIndex2 = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[productIndex2].cartQuantity > 1) {
        state.cartItems[productIndex2].cartQuantity -= 1;
        toast.info(`${action.payload.servicename} decreased by one`, {
          position: "top-left",
        });
      } else if (state.cartItems[productIndex2].cartQuantity === 1) {
        const newCartItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = newCartItem;
        toast.success(`${action.payload.servicename} removed from cart`, {
          position: "top-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      break;

    case REMOVE_CART:
      const newCartItem1 = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newCartItem1;
      toast.success(`${action.payload.description} removed from cart`, {
        position: "top-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      break;

    case CLEAR_CART:
      console.log(action.payload);
      state.cartItems = [];
      toast.info(`Cart cleared`, {
        position: "top-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      break;

    case CALCULATE_SUB_TOTAL:
      const array = [];
      state.cartItems.map((item) => {
        const { price, cartQuantity } = item;
        const cartItemAmount = price * cartQuantity;
        return array.push(cartItemAmount);
      });
      const totalAmount = array.reduce((a, b) => {
        return a + b;
      }, 0);
      state.cartTotalAmount = totalAmount;
      break;

    case CALCULATE_TOTAL_QUANTITY:
      const array1 = [];
      if (state.cartItems) {
        // Agregamos un control de flujo para verificar si "cartItems" existe
        state.cartItems.map((item) => {
          const { cartQuantity } = item;
          const quantity = cartQuantity;
          return array1.push(quantity);
        });
      }
      const totalQuantity = array1.reduce((a, b) => {
        return a + b;
      }, 0);
      state.cartTotalQuantity = totalQuantity;
      break;

    case SAVE_URL:
      state.previousURL = action.payload;
      break;

    case SAVE_SHIPPING_ADDRESS:
      console.log(action.payload);
      state.shippingAddress = action.payload;
      break;

    case SAVE_BILLING_ADDRESS:
      console.log(action.payload);
      state.billingAddress = action.payload;
      break;

    case GET_SERVICE_USER:
      return {
        ...state,
        serviceUser: action.payload,
      };

    case USER_SESSION:
      return {
        ...state,
        session: action.payload,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
