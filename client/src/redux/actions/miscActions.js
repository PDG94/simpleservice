import axios from "axios";
import {
  setCategories,
  resetPage,
  setAdmingMetrics,
} from "../slices/miscSlice";

const errorlog = (e) => console.log(e.message || e);

export const getCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://simpleservice-production.up.railway.app/categories"
    );
    return dispatch(setCategories(response.data));
  } catch (error) {
    errorlog(error);
  }
};

export const resedPaged = (payload) => (dispatch) => {
  try {
    return dispatch(resetPage(payload));
  } catch (error) {
    errorlog(error);
  }
};

export const adminMetrics = (token) => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://simpleservice-production.up.railway.app/admin/metrics",
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    const { services, users, totalServices, totalUsers } = response.data;
    return dispatch(
      setAdmingMetrics({
        servicePercentage: services,
        usersPercentage: users,
        totalServices,
        totalUsers,
      })
    );
  } catch (error) {
    errorlog(error);
  }
};
