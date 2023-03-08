import axios from "axios";
import {
  setActiveUser,
  removeActiveUser,
  setUsers,
  setServiceUser,
} from "../slices/usersSlice";

export const activeUsers = (payload) => (dispatch) => {
  try {
    return dispatch(setActiveUser(payload));
  } catch (e) {
    console.log(e.message || e);
  }
};

export const removeUsers = () => (dispatch) => {
  try {
    return dispatch(removeActiveUser());
  } catch (e) {
    console.log(e.message || e);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://simpleservice-production.up.railway.app/users"
    );
    return dispatch(setUsers(response.data));
  } catch (e) {
    console.log(e.message || e);
  }
};

export const getServiceUser = (userId, token) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://simpleservice-production.up.railway.app/user/${userId}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    return dispatch(setServiceUser(response.data));
  } catch (e) {
    console.log(e.message || e);
  }
};

//non redux actions

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

export function deleteUser() {
  //esta función se esta importando en ViewServices pero no existe
}
