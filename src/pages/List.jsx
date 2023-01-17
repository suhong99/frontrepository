import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../components/Card";
import { __getPost } from "../redux/modules/postSlice";
import Detail from "./Detail";
import Slide from "../components/Slide";

const List = () => {
  const { list } = useSelector((state) => state.list);
  return (
    <>
      <StTitle>게시판</StTitle>
      {/* 무한스크롤 아래로 + 오른쪽으로가는 슬라이드 */}
      {/* <Slide /> */}
      {list.map((post) => (
        <Card key={post.id} post={post} />
      ))}
      <Card />
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
