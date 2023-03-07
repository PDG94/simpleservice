import { createSlice } from "@reduxjs/toolkit";

const persistentPage =
  localStorage.getItem("currentPage") !== null
    ? JSON.parse(localStorage.getItem("currentPage"))
    : 1;

const persistentCategories =
  localStorage.getItem("categories") !== null
    ? JSON.parse(localStorage.getItem("categories"))
    : [];

const persistentServPer =
  localStorage.getItem("servicePercentage") !== null
    ? JSON.parse(localStorage.getItem("servicePercentage"))
    : 0;

const persistentUserPer =
  localStorage.getItem("usersPercentage") !== null
    ? JSON.parse(localStorage.getItem("usersPercentage"))
    : 0;

const persistentTotalServ =
  localStorage.getItem("totalServices") !== null
    ? JSON.parse(localStorage.getItem("totalServices"))
    : 0;

const persistentTotalUser =
  localStorage.getItem("totalUsers") !== null
    ? JSON.parse(localStorage.getItem("totalUsers"))
    : 0;

const initialState = {
  isLoading: true,
  currentPage: persistentPage,
  categories: persistentCategories,
  servicePercentage: persistentServPer,
  usersPercentage: persistentUserPer,
  totalServices: persistentTotalServ,
  totalUsers: persistentTotalUser,
};

export const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
      localStorage.setItem(
        "categories",
        JSON.stringify(state.categories.map((item) => item))
      );
    },
    resetPage: (state, action) => {
      state.currentPage = action.payload;
      localStorage.setItem("currentPage", JSON.stringify(state.currentPage));
    },
    setAdmingMetrics: (state, action) => {
      state.servicePercentage = action.payload.servicePercentage;
      state.usersPercentage = action.payload.usersPercentage;
      state.totalServices = action.payload.totalServices;
      state.totalUsers = action.payload.totalUsers;

      localStorage.setItem(
        "servicePercentage",
        JSON.stringify(state.servicePercentage)
      );
      localStorage.setItem(
        "usersPercentage",
        JSON.stringify(state.usersPercentage)
      );
      localStorage.setItem(
        "totalServices",
        JSON.stringify(state.totalServices)
      );
      localStorage.setItem("totalUsers", JSON.stringify(state.totalUsers));
    },
  },
});

export const { setCategories, resetPage, setAdmingMetrics } = miscSlice.actions;

export default miscSlice.reducer;
