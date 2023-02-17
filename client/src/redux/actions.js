import axios from "axios";
import {
  GET_SERVICES,
  GET_SERVICES_DETAIL,
  CLEANER_NAME,
  GET_BY_NAME,
  CLEAN_STATE,
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

export function getServicesByName() {
  return async function (dispatch) {
    try {
      let json = await axios.get("ruta a name (query)");
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
