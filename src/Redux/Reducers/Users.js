import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const Users = createSlice({
  name: "users",
  initialState,

  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const userAction = Users.actions;

export default Users;
