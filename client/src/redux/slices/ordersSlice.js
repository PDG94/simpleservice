import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderHistory: [],
  totalOrderAmount: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orderHistory = action.payload;
    },
    orderAmount: (state, action) => {
      state.totalOrderAmount = action.payload;
    },
  },
});

export const { setOrders, orderAmount } = ordersSlice.actions;

export default ordersSlice.reducer;
