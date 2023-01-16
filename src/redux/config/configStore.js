import { configureStore } from "@reduxjs/toolkit";
import memberList from "../modules/memeberListSlice";

const store = configureStore({
  reducer: {
    memberList,
  },
});

export default store;
