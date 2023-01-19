import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../components/Card";
import { __getPost } from "../redux/modules/postSlice";
import Detail from "./Detail";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list } = useSelector((state) => state.post);
  // console.log("리스트", list);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  //슬라이드
  //슬라이드 settings 부분
  const settings = {
    dots: true, // 점은 보임
    infinite: true, // 무한
    speed: 500,
    slidesToShow: 4, //보이기고 싶은 장수
    slidesToScroll: 3, //몇장씩 넘어갈 지
  };

  return (
    <>
      <StTitle>게시판</StTitle>
      <StListContainer>
        <StBox>
          {/* 슬라이드 적용 부분 */}
          <Slider {...settings}>
            {list.map((post) => (
              <Card key={post.qId} post={post} />
            ))}
          </Slider>
        </StBox>
      </StListContainer>
    </>
  );
};

export default List;

const StTitle = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StListContainer = styled.div`
  /* border: 1px solid blue; */
  margin: 100px;
  width: 100%;
  height: 400px;
`;

const StBox = styled.div`
  /* border: 1px solid red; */
`;
