import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; //is used to delay the evaluation of an operation(asynchronous actions)
import rootReducer from "../redux/reducer";
import { loadState, saveState } from "../localstorage";
import throttle from "lodash/throttle";

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

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
    });
  }, 1000)
);
