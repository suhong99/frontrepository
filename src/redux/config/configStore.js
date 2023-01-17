import { configureStore } from "@reduxjs/toolkit";
import memberList from "../modules/memeberListSlice";
import post from "../modules/postSlice";
import list from "../modules/listSlice";

const store = configureStore({
  reducer: {
    memberList,
    post,
    list,
  },
});

export default store;
