import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginHeader from "../components/Header/LoginHeader";
import Home from "../pages/Home";
import List from "../pages/List";
import Post from "../pages/Post";
import SignUp from "../pages/SignUp";
import Layout from "./Layout";
import Header from "./Header";
import Detail from "../pages/Detail";
import Comments from "../components/comments/Comments";
import LoginHeader from "./LoginHeader";
// import { Navigate } from "react-router-dom";
// import LoginHeader from "./LoginHeader";
const Router = () => {
  const checkLogin = sessionStorage.getItem("memberinfo");
  // const navigate = useNavigate();
  // console.log(checkLogin);
  // console.log(typeof checkLogin);
  return (
    <BrowserRouter>
      <LoginHeader />

      <Header />
      <Layout>
        <Routes>
          {/* {checkLogin !== null ? (
            <> */}
          <Route path="/Post" element={<Post />} />
          <Route path="/List" element={<List />} />
          <Route path="/List/:id" element={<Detail />} />
          <Route path="/Comments/:id" element={<Comments />} />
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/SignUp" element={<SignUp />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
