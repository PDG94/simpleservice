import axios from "axios";
import {
  setServices,
  setServiceDetail,
  setServiceList,
  emptyServices,
  emptyServiceDetail,
  serviceByName,
  filterServices,
} from "../slices/servicesSlice";

const errorlog = (e) => console.log(e.message || e);

export const getServices = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://simpleservice-production.up.railway.app/services"
    );
    return dispatch(setServices(response.data));
  } catch (error) {
    errorlog(error);
  }
};

export const getServiceDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://simpleservice-production.up.railway.app/services/${id}`
    );
    return dispatch(setServiceDetail(response.data));
  } catch (error) {
    errorlog(error);
  }
};

export const getServiceList = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://simpleservice-production.up.railway.app/categories/${id}`
    );
    return dispatch(setServiceList(response.data[0].ServiceLists));
  } catch (error) {
    errorlog(error);
  }
};

export const cleanState = () => (dispatch) => {
  try {
    return dispatch(emptyServices());
  } catch (error) {
    errorlog(error);
  }
};

export const clearName = () => (dispatch) => {
  try {
    return dispatch(emptyServiceDetail());
  } catch (error) {
    errorlog(error);
  }
};

export const getServicesByName = (name) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://simpleservice-production.up.railway.app/services?servicename=${name}`
    );
    return dispatch(serviceByName(response.data));
  } catch (error) {
    errorlog(error);
  }
};

export const cardsFilter = ({ order, direction, categoryId }) => async (
  dispatch
) => {
  try {
    if (order && direction && categoryId) {
      const response = await axios.get(
        `https://simpleservice-production.up.railway.app/services?order=${order}&direction=${direction}&categoryId=${categoryId}`
      );
      return dispatch(filterServices(response.data));
    }
    if (order && direction) {
      const response = await axios.get(
        `https://simpleservice-production.up.railway.app/services?order=${order}&direction=${direction}`
      );
      return dispatch(filterServices(response.data));
    }
    if (categoryId) {
      const response = await axios.get(
        `https://simpleservice-production.up.railway.app/services?categoryId=${categoryId}`
      );
      return dispatch(filterServices(response.data));
    }
  } catch (error) {
    errorlog(error);
  }
};
