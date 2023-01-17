import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsSuitHeartFill, BsFillChatFill } from "react-icons/bs";
import Comments from "../components/comments/Comment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  __getPostDetail,
  __updatePostDetail,
} from "../redux/modules/detailSlice";
import { clearPost } from "../redux/modules/postSlice";

//디테일페이지
//1. 제목과 내용에 post 에서 보내주는 id,title,content 가 들어가고

//2. 자기가 쓴 글에서 수정하기 보이기

//3. 제출하기를 누르면 답이면 정답입니다 팝업
//4. 제출하기를 누르면 오답이면 오답입니다 팝업 하고 다시 답 맞추기로 커서

//5. 하트 아이콘 누르면 좋아요 조회수 올라가고->API 명세서 참고

//6. 댓글 아이콘 누르면 댓글창 보이고 댓글확인

const Detail = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();

  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedDtail, setUpdatedDetail] = useState("");

  const detail = useSelector((state) => state.detail.list);

  useEffect(() => {
    dispatch(__getPostDetail(param.id));
    return () => dispatch(clearPost());
  }, [dispatch, param.id]);

  useEffect(() => {
    setUpdatedDetail(detail.content);
  }, [detail]);

  const onEditdableHandler = async (detail) => {
    if (updatedDtail.trim() === "") {
      return alert("입력 내용 없습니다.");
    }
    dispatch(__updatePostDetail({ ...detail, content: updatedDtail }));
    setIsEditMode(false);
  };

  return (
    <>
      <StContainer>
        <StTitle>문제를 풀어봅시다.</StTitle>
        <StMain>
          <StWrap>
            <StinputBox>
              <StBox boxHeight="50px">{detail?.title}</StBox>
              <StBox boxHeight="200px">{detail?.content}</StBox>
              <StInputWrap>
                <StInput placeholder="답제출하는 곳" />
                <StButton>작성하기</StButton>
              </StInputWrap>
            </StinputBox>
          </StWrap>
        </StMain>

        <StIcon>
          <BsSuitHeartFill />
          <BsSuitHeartFill color="red" />
          <span>0</span>

          <BsFillChatFill color="gray" />
          <BsFillChatFill color="#3e405e" />
        </StIcon>

        {/* <Comments /> */}
      </StContainer>
    </>
  );
};

export default Detail;

const StContainer = styled.div`
  width: 100vh;
  height: 100vh;
`;

const StMain = styled.div`
  box-sizing: border-box;
  border-radius: 0 0 20px 20px;
  width: 700px;
  height: 500px;
  padding: 10px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to top,
    #bdc2e8 0%,
    #bdc2e8 1%,
    #e6dee9 100%
  );
`;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StTitle = styled.div`
  border-radius: 20px 20px 0 0;
  width: 700px;
  box-sizing: border-box;
  padding: 12px;
  margin: 10px 0 0 10px;
  background-image: linear-gradient(
    to top,
    #1e3c72 0%,
    #1e3c72 1%,
    #2a5298 100%
  );
  margin-top: 40px;
  color: white;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

const StinputBox = styled.div``;

const StBox = styled.div`
  background-color: white;
  border-radius: 10px;
  height: ${(props) => props.boxHeight};
  width: 500px;
  outline: none;
  padding: 12px;
  font-size: 20px;
  margin: 30px;
`;

const StInputWrap = styled.div`
  margin: 20px;
  display: flex;
  padding: 20px;
`;

const StInput = styled.input`
  border: none;
  border-radius: 10px 0 0 10px;
  box-sizing: border-box;
  height: 50px;
  width: 400px;
  outline: none;
  padding: 12px;
  font-size: 20px;
`;

const StButton = styled.button`
  border: none;
  border-radius: 0 10px 10px 0;
  height: 50px;
  width: 100px;
  background-color: #4a5b5b;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const StIcon = styled.div`
  border: 3px solid red;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  font-size: 30px;
  font-weight: 500;
  padding-left: 30px;
  cursor: pointer;
`;
