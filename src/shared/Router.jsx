import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginHeader from "../components/Header/LoginHeader";
import Home from "../pages/Home";
import List from "../pages/List";
import Post from "../pages/Post";
import SignUp from "../pages/SignUp";
import Layout from "./Layout";
import Header from "./Header";
import Detail from "../pages/Detail";
// import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
      <LoginHeader />
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/List" element={<List />} />
          <Route path="/List/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
