import { configureStore } from "@reduxjs/toolkit";
import memberList from "../modules/memeberListSlice";
import post from "../modules/postSlice";
import detail from "../modules/detailSlice";

const store = configureStore({
  reducer: {
    memberList,
    post,
    detail,
  },
});

export default store;
