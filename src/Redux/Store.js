import { configureStore } from "@reduxjs/toolkit";
import Users from "./Reducers/Users";

const Store = configureStore({
  reducer: {
    user: Users.reducer,
  },
});

export default Store;
