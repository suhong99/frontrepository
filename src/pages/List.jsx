import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../shared/Layout";
import Card from "../components/Card";
import { __getList } from "../redux/modules/listSlice";
import styled from "styled-components";

const List = () => {
  const dispatch = useDispatch();
  //const { list } = useSelector((state) => state.list);

  // useEffect(() => {
  //   dispatch(__getList());
  // }, [dispatch]);
  return (
    <>
      <Layout>
        <StTitle>게시판</StTitle>
        {/* <Card /> */}
        <div>
          {/* {list.map((post) => (
            <Card key={post.id} post={post} />
          ))} */}
        </div>
      </Layout>
    </>
  );
};

export default List;

const StTitle = styled.div`
  /* border: 2px solid; */
  width: 300px;
  border-radius: 10px;
  margin-top: 5%;
  background-color: #4a5b5b;
  color: white;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
`;
