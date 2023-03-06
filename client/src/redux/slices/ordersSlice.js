import { createSlice } from "@reduxjs/toolkit";

const persistentHist =
  localStorage.getItem("orderHistory") !== null
    ? JSON.parse(localStorage.getItem("orderHistory"))
    : [];

const persistentAmount =
  localStorage.getItem("totalOrderAmount") !== null
    ? JSON.parse(localStorage.getItem("totalOrderAmount"))
    : null;

const initialState = {
  orderHistory: persistentHist,
  totalOrderAmount: persistentAmount,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orderHistory = action.payload;
      localStorage.setItem(
        "orderHistory",
        JSON.stringify(state.orderHistory.map((item) => item))
      );
    },
    orderAmount: (state, action) => {
      state.totalOrderAmount = action.payload;
      localStorage.setItem(
        "totalOrderAmount",
        JSON.stringify(state.totalOrderAmount)
      );
    },
  },
});

export const { setOrders, orderAmount } = ordersSlice.actions;

export default ordersSlice.reducer;
