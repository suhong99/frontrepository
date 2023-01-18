import { configureStore } from "@reduxjs/toolkit";
import memberList from "../modules/memeberListSlice";
import post from "../modules/postSlice";
import detail from "../modules/detailSlice";
import comment from "../modules/commentSlice";
import comments from "../modules/commentsSlice";

const store = configureStore({
  reducer: {
    memberList,
    post,
    detail,
    comment,
    comments,
  },
});

export default store;
