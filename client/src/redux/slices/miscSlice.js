import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  currentPage: 1,
  categories: [],
  servicePercentage: 0,
  usersPercentage: 0,
  totalServices: 0,
  totalUsers: 0,
};

export const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    resetPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setAdmingMetrics: (state, action) => {
      state.servicePercentage = action.payload.servicePercentage;
      state.usersPercentage = action.payload.usersPercentage;
      state.totalServices = action.payload.totalServices;
      state.totalUsers = action.payload.totalUsers;
    },
  },
});

export const { setCategories, resetPage, setAdmingMetrics } = miscSlice.actions;

export default miscSlice.reducer;
