import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import Post from "../pages/Post";
import SignUp from "../pages/SignUp";
import Layout from "./Layout";
// import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
