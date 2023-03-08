import { setOrders, orderAmount } from "../slices/ordersSlice";

const errorlog = (e) => console.log(e.message || e);

export const storeOrders = (payload) => (dispatch) => {
  try {
    return dispatch(setOrders(payload));
  } catch (error) {
    errorlog(error);
  }
};

export const calcOrdersAmount = (payload) => (dispatch) => {
  try {
    return dispatch(orderAmount(payload));
  } catch (error) {
    errorlog(error);
  }
};
