// import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk"; //is used to delay the evaluation of an operation(asynchronous actions)
// import rootReducer from "../redux/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "../localstorage";
import throttle from "lodash/throttle";
import servicesReducer from "./slices/servicesSlice";
import usersReducer from "./slices/usersSlice";
import miscReducer from "./slices/miscSlice";
import cartReducer from "./slices/cartSlice";
import ordersReducer from "./slices/ordersSlice";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    users: usersReducer,
    misc: miscReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
});

// export const store = createStore(
//   rootReducer,
//   persistedState,
//   composeWithDevTools(applyMiddleware(thunk))
// );

store.subscribe(
  throttle(() => {
    saveState({
      services: store.getState().services,
      serviceDetail: store.getState().serviceDetail,
      categories: store.getState().categories,
      currentPage: store.getState().currentPage,
      isLoggedIn: store.getState().isLoggedIn,
      email: store.getState().email,
      useName: store.getState().useName,
      userID: store.getState().userID,
      users: store.getState().users,
      cartTotalQuantity: store.getState().cartTotalQuantity,
      cartTotalAmount: store.getState().cartTotalAmount,
      serviceUser: store.getState().serviceUser,
      // session: store.getState().session,
      cartItems: store.getState().cartItems,
      shippingAddress: store.getState().shippingAddress,
      billingAddress: store.getState().billingAddress,
      orderHistory: store.getState().orderHistory,
      servicePercentage: store.getState().servicePercentage,
      usersPercentage: store.getState().usersPercentage,
      totalServices: store.getState().totalServices,
      totalUsers: store.getState().totalServices,
      totalOrderAmount: store.getState().totalOrderAmount,
    });
  }, 1000)
);
