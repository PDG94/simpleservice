import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  serviceDetail: {},
  serviceList: [],
};

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setServiceDetail: (state, action) => {
      state.serviceDetail = action.payload;
    },
    setServiceList: (state, action) => {
      state.serviceList = action.payload;
    },
    emptyServices: (state, action) => {
      state.services = [];
    },
    emptyServiceDetail: (state, action) => {
      state.serviceDetail = {};
    },
    serviceByName: (state, action) => {
      state.services = action.payload;
    },
    filterServices: (state, action) => {
      state.services = action.payload;
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
