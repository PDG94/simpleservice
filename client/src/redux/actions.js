import axios from "axios";
import {
  GET_SERVICES,
  GET_SERVICES_DETAIL,
  CLEANER_NAME,
  GET_BY_NAME,
  CLEAN_STATE,
  GET_CATEGORIES,
  FILTER_SERVICES,
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

export const cleanState = (payload) => {
  return function (dispatch) {
    dispatch({ type: CLEAN_STATE, payload: [] });
  };
};

export function clearName(payload) {
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
      console.log(error.message)
    }
    
  };
}
