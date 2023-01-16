import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginHeader from "../components/Header/LoginHeader";
import Home from "../pages/Home";
import List from "../pages/List";
import Post from "../pages/Post";
import SignUp from "../pages/SignUp";
import Layout from "./Layout";
import Header from "./Header";
//임시 댓글 페이지 (삭제예정)
import TemporaryComment from "../components/comments/TemporaryComment";
// import Detail from "../pages/Detail";
// import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
      <LoginHeader />
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* 임시 댓글 페이지 (삭제예정) */}
          <Route path="/comment" element={<TemporaryComment />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
