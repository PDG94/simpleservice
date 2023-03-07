import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./slices/servicesSlice";
import usersReducer from "./slices/usersSlice";
import miscReducer from "./slices/miscSlice";
import cartReducer from "./slices/cartSlice";
import ordersReducer from "./slices/ordersSlice";

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    users: usersReducer,
    misc: miscReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
});
