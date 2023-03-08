import { toast } from "react-toastify";
import {
  addedToCart,
  addNewToCart,
  reduceQuantity,
  removeFromCart,
  clearCart,
  cartSubTotal,
  cartSubTotalQuantity,
  cartSaveUrl,
} from "../slices/cartSlice";

const errorlog = (e) => console.log(e.message || e);

export const addToExinstingCart = (payload, index) => (dispatch) => {
  try {
    toast.info(`${payload.servicename} increased by one`, {
      position: "top-left",
    });
    return dispatch(addedToCart(index));
  } catch (error) {
    errorlog(error);
  }
};

export const addNewCart = (payload) => (dispatch) => {
  try {
    const cart = { ...payload, cartQuantity: 1 };
    toast.info(`${payload.servicename} increased by one`, {
      position: "top-left",
    });
    return dispatch(addNewToCart(cart));
  } catch (error) {
    errorlog(error);
  }
};

export const reduceCartQuantity = (payload, index) => (dispatch) => {
  try {
    toast.info(`${payload.servicename} decreased by one`, {
      position: "top-left",
    });
    return dispatch(reduceQuantity(index));
  } catch (error) {
    errorlog(error);
  }
};

export const removeCard = (payload) => (dispatch) => {
  try {
    toast.success(`${payload.servicename} removed from cart`, {
      position: "top-left",
    });
    return dispatch(removeFromCart(payload.id));
  } catch (error) {
    errorlog(error);
  }
};

export const emptyCart = () => (dispatch) => {
  try {
    toast.info(`Cart cleared`, {
      position: "top-left",
    });
    return dispatch(clearCart([]));
  } catch (error) {
    errorlog(error);
  }
};

export const subTotalCalc = (payload) => (dispatch) => {
  return dispatch(cartSubTotal(payload));
};

export const subTotalQuant = (payload) => (dispatch) => {
  return dispatch(cartSubTotalQuantity(payload));
};

export const saveUrl = (payload) => (dispatch) => {
  return dispatch(cartSaveUrl(payload));
};
