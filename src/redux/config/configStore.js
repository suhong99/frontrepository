import { configureStore } from "@reduxjs/toolkit";
import memeberList from "../modules/memeberListSlice";

const store = configureStore({
  reducer: {
    memeberList,
  },
});

export default store;
