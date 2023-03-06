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

//copiar esta función adentro del componente que la importe
// const calculateOrdersAmount = (payload) => {
//   const array = [];
//   orderHistory.map((item) => {
//     const { orderAmount } = item;
//     return array.push(orderAmount);
//   });
//   const totalAmount = array.reduce((a, b) => {
//     return a + b;
//   }, 0);
//   return totalAmount;
// };
