import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; //is used to delay the evaluation of an operation(asynchronous actions)
import rootReducer from "../redux/reducer";
import {loadState, saveState} from "../localstorage";

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState({
    
      services: store.getState().services,
      serviceDetail: store.getState().serviceDetail,
      categories: store.getState().categories,
      currentPage: store.getState().currentPage,
      isLoggedIn: store.getState().isLoggedIn,
      email: store.getState().email,
      useName: store.getState().useName,
      userID: store.getState().userId,
      token: store.getState().token,
      users: store.getState().users,
      cartTotalQuantity: store.getState().cartTotalQuantity,
      cartTotalAmount: store.getState().cartTotalAmount,
      serviceUser: store.getState().serviceUser,
  });
})
