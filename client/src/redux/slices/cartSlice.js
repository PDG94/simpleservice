import { createSlice } from "@reduxjs/toolkit";

const persistentCart =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const persistentQuantity =
  localStorage.getItem("cartTotalQuantity") !== null
    ? JSON.parse(localStorage.getItem("cartTotalQuantity"))
    : 0;

const persistentAmount =
  localStorage.getItem("cartTotalAmount") !== null
    ? JSON.parse(localStorage.getItem("cartTotalAmount"))
    : 0;

const persistentUrl =
  localStorage.getItem("previousURL") !== null
    ? JSON.parse(localStorage.getItem("previousURL"))
    : "";

const initialState = {
  cartItems: persistentCart,
  cartTotalQuantity: persistentQuantity,
  cartTotalAmount: persistentAmount,
  previousURL: persistentUrl,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addedToCart: (state, action) => {
      state.cartItems[action.payload].cartQuantity += 1;
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
    addNewToCart: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
    reduceQuantity: (state, action) => {
      state.cartItems[action.payload].cartQuantity -= 1;
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
    clearCart: (state, action) => {
      state.cartItems = action.payload;
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
    cartSubTotal: (state, action) => {
      state.cartTotalAmount = action.payload;
      localStorage.setItem(
        "cartTotalAmount",
        JSON.stringify(state.cartTotalAmount)
      );
    },
    cartSubTotalQuantity: (state, action) => {
      state.cartTotalQuantity = action.payload;
      localStorage.setItem(
        "cartTotalQuantity",
        JSON.stringify(state.cartTotalQuantity)
      );
    },
    cartSaveUrl: (state, action) => {
      state.previousURL = action.payload;
      localStorage.setItem("previousURL", JSON.stringify(state.previousURL));
    },
  },
});

// export const cartContents = (state) => state.cart.cartItems;

export const {
  addedToCart,
  addNewToCart,
  reduceQuantity,
  removeFromCart,
  clearCart,
  cartSubTotal,
  cartSubTotalQuantity,
  cartSaveUrl,
} = cartSlice.actions;

export default cartSlice.reducer;
