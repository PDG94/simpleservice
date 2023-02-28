// import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { store } from "./store";

// console.log(store.getState());
const cartItems = store.getState().cartItems.slice();
// console.log(cartItems)

export const addToCartHelper = (payload) => {
  const productIndex = cartItems.findIndex((item) => item.id === payload.id);
  if (productIndex >= 0) {
    // Item already exists in the cart
    // Increase the cartQuantity
    cartItems[productIndex].cartQuantity += 1;
    toast.info(`${payload.servicename} increased by one`, {
      position: "top-left",
    });
  } else {
    // Item doesn't exists in the cart
    // Add item to the cart
    const tempProduct = { ...payload, cartQuantity: 1 };
    cartItems.push(tempProduct);
    toast.success(`${payload.servicename} added to cart`, {
      position: "top-left",
    });
  }
  return cartItems.slice();
};

export const decreaseCartHelper = (payload) => {
  let answer;
  const productIndex2 = cartItems.findIndex((item) => item.id === payload.id);
  if (cartItems[productIndex2].cartQuantity > 1) {
    cartItems[productIndex2].cartQuantity -= 1;
    toast.info(`${payload.servicename} decreased by one`, {
      position: "top-left",
    });
    return (answer = cartItems.slice());
  } else if (cartItems[productIndex2].cartQuantity === 1) {
    const newCartItem = cartItems.filter((item) => item.id !== payload.id);
    toast.success(`${payload.servicename} removed from cart`, {
      position: "top-left",
    });
    return (answer = newCartItem.slice());
  }

  return answer;
};

export const removeCartHelper = (payload) => {
  const arr = [...cartItems];
  const newCartItem = arr.filter((item) => item.id !== payload.id);
  toast.success(`${payload.servicename} removed from cart`, {
    position: "top-left",
  });

  return newCartItem.slice();
};

export const clearCartHelper = (payload) => {
  toast.info(`Cart cleared`, {
    position: "top-left",
  });
  return [];
};

export const calculateSubTotalHelper = (payload) => {
  const array = [];
  cartItems.map((item) => {
    const { price, cartQuantity } = item;
    const cartItemAmount = price * cartQuantity;
    return array.push(cartItemAmount);
  });
  const totalAmount = array.reduce((a, b) => {
    return a + b;
  }, 0);
  return totalAmount;
};

export const calculateSubTotalQuantityHelper = (payload) => {
  const array1 = [];
  if (cartItems) {
    // Agregamos un control de flujo para verificar si "cartItems" existe
    cartItems.map((item) => {
      const { cartQuantity } = item;
      const quantity = cartQuantity;
      return array1.push(quantity);
    });
  }
  const totalQuantity = array1.reduce((a, b) => {
    return a + b;
  }, 0);
  return totalQuantity;
};
