import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../components/Card";
import { __getPost } from "../redux/modules/postSlice";
import Detail from "./Detail";
import Slide from "../components/Slide";
import { useNavigate } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list } = useSelector((state) => state.post);
  console.log("리스트", list);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  return (
    <>
      <StTitle>게시판</StTitle>
      {/* 무한스크롤 아래로 + 오른쪽으로가는 슬라이드 */}
      {/* <Slide /> */}
      <StListContainer>
        {list.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </StListContainer>
    </>
  );
};

export default List;

const StTitle = styled.div`
  /* border: 2px solid; */
  width: 300px;
  border-radius: 10px;
  margin-top: 30px;
  color: white;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  background-image: linear-gradient(
    to top,
    #1e3c72 0%,
    #1e3c72 1%,
    #2a5298 100%
  );
`;

const StListContainer = styled.div`
  /* border: 1px solid; */
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
`;
