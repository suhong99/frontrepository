import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BsSuitHeart,
  BsSuitHeartFill,
  BsChat,
  BsChatFill,
} from "react-icons/bs";

import { RiEdit2Fill, RiDeleteBin5Fill } from "react-icons/ri";
import Comments from "../components/comments/Comment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  __getPostDetail,
  __updatePostDetail,
  __deletePostDetail,
} from "../redux/modules/detailSlice";
import { clearPost } from "../redux/modules/postSlice";
import { __submitAnswer } from "../redux/modules/detailSlice";
import { useRef } from "react";
const Detail = ({ list }) => {
  const dispatch = useDispatch();
  const param = useParams();
  // console.log(param);
  const navigate = useNavigate();

  //좋아요
  const [like, setLike] = React.useState(true);

  const likeClick = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedDtail, setUpdatedDetail] = useState("");

  const detail = useSelector((state) => state.detail.list);
  // console.log(detail);
  useEffect(() => {
    dispatch(__getPostDetail(param.id));
    return () => dispatch(clearPost());
  }, [dispatch, param.id]);

  useEffect(() => {
    setUpdatedDetail(detail.content);
  }, [detail]);

  // 정답 제거하기
  const onDeleteHandler = () => {
    dispatch(__deletePostDetail(param.id));
    navigate(-1);
  };

  const onEditdableHandler = async (list) => {
    if (__updatePostDetail.trim() === "") {
      return alert("입력 내용 없습니다.");
    }
    dispatch(__updatePostDetail({ ...detail, content: updatedDtail }));
    setIsEditMode(false);
  };
  // 정답 제출
  const onSubmitAnswerHandler = () => {
    dispatch(__submitAnswer({ ...param, answer: answerInput.current.value }));
  };

  // console.log(detail.nickname);
  // console.log(sessionStorage.getItem("memberinfo"));
  const whoAmI = JSON.parse(sessionStorage.getItem("memberinfo"));
  // console.log(whoAmI);
  // console.log(detail.nickname, whoAmI.nickname);
  const answerInput = useRef();
  // console.log(answerInput);
  return (
    <>
      <StContainer>
        <Stwrap>
          <StTitle>문제를 풀어봅시다.</StTitle>
          <StMain>
            <StWrap>
              {whoAmI?.nickname === detail.nickname ? (
                <StIcon>
                  <RiEdit2Fill
                    onClick={(event) => {
                      event.stopPropagation();
                      const result = window.confirm("수정하쉴?");
                      if (result) {
                        return onEditdableHandler;
                      } else {
                        return;
                      }
                    }}
                    color="white"
                    size={35}
                  />

                  <RiDeleteBin5Fill
                    onClick={(event) => {
                      event.stopPropagation();
                      const result = window.confirm("정말 지울까요?");
                      if (result) {
                        return onDeleteHandler(), navigate("/List");
                      } else {
                        return;
                      }
                    }}
                    color="white"
                    size={35}
                  />
                </StIcon>
              ) : null}

              <StinputBox>
                <StBox boxHeight="50px">{detail?.title}</StBox>
                <StBox boxHeight="300px">{detail?.content}</StBox>
                <StInputWrap>
                  <StInput
                    type="text"
                    name="answer"
                    ref={answerInput}
                    placeholder="답제출하는 곳"
                  />
                  <StButton onClick={onSubmitAnswerHandler}>작성하기</StButton>
                </StInputWrap>
              </StinputBox>
            </StWrap>
          </StMain>
          <StIconWrap>
            {like ? (
              <BsSuitHeart onClick={likeClick} />
            ) : (
              <BsSuitHeartFill onClick={likeClick} color="red" />
            )}
            <span>{detail.like}</span>
          </StIconWrap>
        </Stwrap>
      </StContainer>
    </>
  );
};

export default Detail;

const StContainer = styled.div`
  width: 100vh;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stwrap = styled.div`
  width: 700px;
  height: 700px;
`;

const StMain = styled.div`
  box-sizing: border-box;
  border-radius: 0 0 20px 20px;
  width: 700px;
  height: 700px;
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
  align-items: center;
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
  margin: 7px 30px;
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
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  font-size: 30px;
  font-weight: 500;
  padding-left: 30px;
  cursor: pointer;
`;

const StIconWrap = styled.div`
  /* border: 3px solid blue; */
  font-size: 30px;
  font-weight: 500;
  cursor: pointer;
  width: 400px;
  margin: 20px 0 0 50px;
`;
