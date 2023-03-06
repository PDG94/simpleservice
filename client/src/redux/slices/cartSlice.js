import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  previousURL: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addedToCart: (state, action) => {
      state.cartItems[action.payload].cartQuantity += 1;
    },
    addNewToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    reduceQuantity: (state, action) => {
      state.cartItems[action.payload].cartQuantity -= 1;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state, action) => {
      state.cartItems = action.payload;
    },
    cartSubTotal: (state, action) => {
      state.cartTotalAmount = action.payload;
    },
    cartSubTotalQuantity: (state, action) => {
      state.cartTotalQuantity = action.payload;
    },
    cartSaveUrl: (state, action) => {
      state.previousURL = action.payload;
    },
  },
});

export const cartContents = (state) => state.cart.cartItems;

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
