import { createSlice } from "@reduxjs/toolkit";

const persistentServices =
  localStorage.getItem("services") !== null
    ? JSON.parse(localStorage.getItem("services"))
    : [];

const persistentDetail =
  localStorage.getItem("serviceDetail") !== null
    ? JSON.parse(localStorage.getItem("serviceDetail"))
    : {};

const persistentList =
  localStorage.getItem("serviceList") !== null
    ? JSON.parse(localStorage.getItem("serviceList"))
    : [];

const initialState = {
  services: persistentServices,
  serviceDetail: persistentDetail,
  serviceList: persistentList,
};

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
      localStorage.setItem(
        "services",
        JSON.stringify(state.services.map((item) => item))
      );
    },
    setServiceDetail: (state, action) => {
      state.serviceDetail = action.payload;
      localStorage.setItem(
        "serviceDetail",
        JSON.stringify(state.serviceDetail)
      );
    },
    setServiceList: (state, action) => {
      state.serviceList = action.payload;
      localStorage.setItem(
        "serviceList",
        JSON.stringify(state.serviceList.map((item) => item))
      );
    },
    emptyServices: (state, action) => {
      state.services = [];
      localStorage.setItem("services", JSON.stringify(state.services));
    },
    emptyServiceDetail: (state, action) => {
      state.serviceDetail = {};
      localStorage.setItem(
        "serviceDetail",
        JSON.stringify(state.serviceDetail)
      );
    },
    serviceByName: (state, action) => {
      state.services = action.payload;
      localStorage.setItem(
        "services",
        JSON.stringify(state.services.map((item) => item))
      );
    },
    filterServices: (state, action) => {
      state.services = action.payload;
      localStorage.setItem(
        "services",
        JSON.stringify(state.services.map((item) => item))
      );
    },
  },
});

export const {
  setServices,
  setServiceDetail,
  setServiceList,
  emptyServices,
  emptyServiceDetail,
  serviceByName,
  filterServices,
} = serviceSlice.actions;

export default serviceSlice.reducer;
