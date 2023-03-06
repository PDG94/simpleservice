import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  useName: null,
  userID: null,
  users: [],
  serviceUser: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.isLoggedin = true;
      state.email = action.payload.email;
      state.useName = action.payload.useName;
      state.userID = action.payload.userID;
    },
    removeActiveUser: (state, action) => {
      state.isLoggedin = false;
      state.email = null;
      state.useName = null;
      state.userID = null;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setServiceUser: (state, action) => {
      state.serviceUser = action.payload;
    },
  },
});

export const { setActiveUser, removeActiveUser, setUsers, setServiceUser } =
  userSlice.actions;

export default userSlice.reducer;
