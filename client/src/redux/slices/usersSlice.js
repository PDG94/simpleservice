import { createSlice } from "@reduxjs/toolkit";

const persistentLogin =
  localStorage.getItem("isLoggedIn") !== null
    ? JSON.parse(localStorage.getItem("isLoggedIn"))
    : false;

const persistentEmail =
  localStorage.getItem("email") !== null
    ? JSON.parse(localStorage.getItem("email"))
    : null;

const persistentUseName =
  localStorage.getItem("useName") !== null
    ? JSON.parse(localStorage.getItem("useName"))
    : null;

const persistentId =
  localStorage.getItem("userID") !== null
    ? JSON.parse(localStorage.getItem("userID"))
    : null;

const persistentUsers =
  localStorage.getItem("users") !== null
    ? JSON.parse(localStorage.getItem("users"))
    : [];

const persistentServUser =
  localStorage.getItem("serviceUser") !== null
    ? JSON.parse(localStorage.getItem("serviceUser"))
    : {};

const initialState = {
  isLoggedIn: persistentLogin,
  email: persistentEmail,
  useName: persistentUseName,
  userID: persistentId,
  users: persistentUsers,
  serviceUser: persistentServUser,
  isAdmin: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.useName = action.payload.useName;
      state.userID = action.payload.userID;

      localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
      localStorage.setItem("email", JSON.stringify(state.email));
      localStorage.setItem("useName", JSON.stringify(state.useName));
      localStorage.setItem("userID", JSON.stringify(state.userID));
    },
    removeActiveUser: (state, action) => {
      state.isLoggedIn = false;
      state.email = null;
      state.useName = null;
      state.userID = null;

      localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
      localStorage.setItem("email", JSON.stringify(state.email));
      localStorage.setItem("useName", JSON.stringify(state.useName));
      localStorage.setItem("userID", JSON.stringify(state.userID));
    },
    setUsers: (state, action) => {
      state.users = action.payload;
      localStorage.setItem(
        "users",
        JSON.stringify(state.users.map((item) => item))
      );
    },
    setServiceUser: (state, action) => {
      state.serviceUser = action.payload;
      localStorage.setItem("serviceUser", JSON.stringify(state.serviceUser));
    },
    getAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
});

export const {
  setActiveUser,
  removeActiveUser,
  setUsers,
  setServiceUser,
  getAdmin,
} = userSlice.actions;

export default userSlice.reducer;
