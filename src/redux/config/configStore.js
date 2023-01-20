import { configureStore } from "@reduxjs/toolkit";
import memberList from "../modules/memeberListSlice";
import post from "../modules/postSlice";
import detail from "../modules/detailSlice";
import comments from "../modules/commentsSlice";

const store = configureStore({
  reducer: {
    memberList,
    post,
    detail,
    comments,
  },
});

export default store;
