import axios from "axios";
import {
  GET_SERVICES,
  GET_SERVICES_DETAIL,
  CLEANER_NAME,
  GET_BY_NAME,
  CLEAN_STATE,
  GET_CATEGORIES,
  FILTER_SERVICES,
  RESET_PAGED,
  SET_ACTIVE_USER,
  REMOVE_USER,
  // STORE_TOKEN,
  GET_SERVICES_LIST,
  GET_USERS,
  ADD_TO_CART,
  DECREASE_CART,
  CLEAR_CART,
  REMOVE_CART,
  CALCULATE_SUB_TOTAL,
  CALCULATE_TOTAL_QUANTITY,
  SAVE_URL,
  SAVE_SHIPPING_ADDRESS,
  SAVE_BILLING_ADDRESS,
  GET_SERVICE_USER,
  // USER_SESSION,
} from "./actionTypes";

export function getServices() {
  return async function (dispatch) {
    const response = await axios.get(
      "https://simpleservice-production.up.railway.app/services"
    );
    return dispatch({ type: GET_SERVICES, payload: response.data });
  };
}

export const getServicesDetail = (id) => {
  return function (dispatch) {
    fetch(`https://simpleservice-production.up.railway.app/services/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_SERVICES_DETAIL, payload: data }));
  };
};

export const cleanState = () => {
  return function (dispatch) {
    dispatch({ type: CLEAN_STATE, payload: [] });
  };
};

export function clearName() {
  return function (dispatch) {
    dispatch({ type: CLEANER_NAME, payload: {} });
  };
}

export function getServicesByName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        `https://simpleservice-production.up.railway.app/services?servicename=${name}`
      );
      let json1 = await json.data;
      return dispatch({
        type: GET_BY_NAME,
        payload: json1,
      });
    } catch (error) {
      console.log("Error on action GET_BY_NAME", error);
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    const response = await axios.get(
      "https://simpleservice-production.up.railway.app/categories"
    );
    return dispatch({
      type: GET_CATEGORIES,
      payload: response.data,
    });
  };
}

export const resedPaged = (payload) => {
  return function (dispatch) {
    dispatch({ type: RESET_PAGED, payload });
  };
};

export function cardsFilter({ order, direction, categoryId }) {
  return async function (dispatch) {
    try {
      if (order && direction && categoryId) {
        const response = await axios.get(
          `https://simpleservice-production.up.railway.app/services?order=${order}&direction=${direction}&categoryId=${categoryId}`
        );
        return dispatch({
          type: FILTER_SERVICES,
          payload: response.data,
        });
      }
      if (order && direction) {
        const response = await axios.get(
          `https://simpleservice-production.up.railway.app/services?order=${order}&direction=${direction}`
        );
        return dispatch({
          type: FILTER_SERVICES,
          payload: response.data,
        });
      }
      if (categoryId) {
        const response = await axios.get(
          `https://simpleservice-production.up.railway.app/services?categoryId=${categoryId}`
        );
        return dispatch({
          type: FILTER_SERVICES,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const activeUsers = (payload) => {
  return function (dispatch) {
    dispatch({ type: SET_ACTIVE_USER, payload });
  };
};
export const removeUsers = (payload) => {
  return function (dispatch) {
    dispatch({ type: REMOVE_USER, payload });
  };
};

//JWT TOKEN
// export const storeToken = (payload) => {
//   return function (dispatch) {
//     dispatch({ type: STORE_TOKEN, payload });
//   };
// };

//POST REQUEST
export const createdUser = (username, name, token, profilepic) => {
  axios.post(
    "https://simpleservice-production.up.railway.app/users",
    { username, name, profilepic },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
};

//LOGIN REQUEST
export const userLogin = (token) => {
  axios.get("https://simpleservice-production.up.railway.app/login", {
    headers: { Authorization: "Bearer " + token },
  });
};

export function getServiceList(id) {
  return async function (dispatch) {
    const response = await axios.get(
      "https://simpleservice-production.up.railway.app/categories/" + id
    );

    return dispatch({
      type: GET_SERVICES_LIST,
      payload: response.data[0].ServiceLists,
    });
  };
}

export function deleteUser() {
  //esta función se esta importando en ViewServices pero no existe
}

export function getUsers() {
  return async function (dispatch) {
    const response = await axios.get(
      "https://simpleservice-production.up.railway.app/users"
    );
    return dispatch({ type: GET_USERS, payload: response.data });
  };
}
//CART
export const addToCart = (payload) => {
  return function (dispatch) {
    dispatch({ type: ADD_TO_CART, payload });
  };
};

export const decreaseCart = (payload) => {
  return function (dispatch) {
    dispatch({ type: DECREASE_CART, payload });
  };
};

export const removeCart = (payload) => {
  return function (dispatch) {
    dispatch({ type: REMOVE_CART, payload });
  };
};

export const clearCart = (payload) => {
  return function (dispatch) {
    dispatch({ type: CLEAR_CART, payload });
  };
};

export const calculateSubTotal = (payload) => {
  return function (dispatch) {
    dispatch({ type: CALCULATE_SUB_TOTAL, payload });
  };
};

export const calculateTotalQuantity = (payload) => {
  return function (dispatch) {
    dispatch({ type: CALCULATE_TOTAL_QUANTITY, payload });
  };
};

export const saveUrl = (payload) => {
  return function (dispatch) {
    dispatch({ type: SAVE_URL, payload });
  };
};

export const saveShippingAddress = (payload) => {
  return function (dispatch) {
    dispatch({ type: SAVE_SHIPPING_ADDRESS, payload });
  };
};

export const saveBillingAddress = (payload) => {
  return function (dispatch) {
    dispatch({ type: SAVE_BILLING_ADDRESS, payload });
  };
};


export function getServiceUser(userId, token) {
  return async function (dispatch) {
    const response = await axios.get(
      `https://simpleservice-production.up.railway.app/user/${userId}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    return dispatch({
      type: GET_SERVICE_USER,
      payload: response.data,
    });
  };
}

// export function storeSession(user){
//   return function (dispatch) {
//     dispatch({type: USER_SESSION, payload: user })
//   }
// } 