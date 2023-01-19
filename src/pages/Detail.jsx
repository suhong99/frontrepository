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
  console.log(param.id);
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
    navigate("/List");
  };
  // 수정 모드 버튼 핸들러
  const onEditableHandler = () => {
    setIsEditMode(!isEditMode);
  };

  // //edit 시 수정 전 값 ref에 받기
  const editTitleInput = useRef("");
  editTitleInput.current = detail.title;
  const editContentInput = useRef();
  editContentInput.current = detail.content;
  const editAnswerInput = useRef();

  const onEditHandler = async (list) => {
    if (
      editTitleInput.current.value.trim() === "" ||
      editContentInput.current.value.trim() === "" ||
      editAnswerInput.current.value.trim() === ""
    ) {
      return alert("수정할 정보가 비어 있습니다.");
    }

    dispatch(
      __updatePostDetail({
        ...param,
        title: editTitleInput.current.value,
        content: editContentInput.current.value,
        answer: editAnswerInput.current.value,
      })
    );
    setIsEditMode(false);
    dispatch(__getPostDetail(param.id));
  };
  // 정답 제출
  const onSubmitAnswerHandler = () => {
    dispatch(__submitAnswer({ ...param, answer: answerInput.current.value }));
  };
  // json 형식으로 저장된 닉네임 parse로 바꾸기
  const whoAmI = JSON.parse(sessionStorage.getItem("memberinfo"));
  const answerInput = useRef();
  return (
    <>
      {!isEditMode ? (
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
                          // console.log("들어오나? 이벤트쪽");
                          return onEditableHandler();
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
                          return onDeleteHandler();
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
                    <StButton onClick={onSubmitAnswerHandler}>
                      작성하기
                    </StButton>
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
      ) : (
        // 수정 버튼을 누른 후의 부분
        <StContainer>
          <Stwrap>
            <StTitle>수정 중 입니다.</StTitle>
            <StMain>
              <StWrap>
                <StinputBox>
                  <StEditInput
                    type="text"
                    name="editTitleInput"
                    ref={editTitleInput}
                    defaultValue={editTitleInput.current}
                  />
                  <Textarea
                    type="text"
                    name="editContentInput"
                    ref={editContentInput}
                    defaultValue={editContentInput.current}
                  />
                  <StEditInput
                    type="text"
                    name="editAnswer"
                    ref={editAnswerInput}
                  />
                  <StEditButtonBox>
                    <button onClick={onEditHandler}>수정하기</button>
                    <button onClick={onEditableHandler}>취소</button>
                  </StEditButtonBox>
                </StinputBox>
              </StWrap>
            </StMain>
            <StIconWrap></StIconWrap>
          </Stwrap>
        </StContainer>
      )}
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
  height: 650px;
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

const StinputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const StEditInput = styled.input`
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  height: 70px;
  width: 600px !important ;
  outline: none;
  padding: 30px;
  font-size: 20px;
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  width: 600px !important;
  height: 300px;
  padding: 20px;
  font-size: 20px;
  display: flex;
  margin-top: 20px;
  resize: none;
`;

const StEditButtonBox = styled.div`
  display: flex;
  width: 600px;
  justify-content: center;
  margin-top: 10px;
  gap: 15px;
  button {
    background-color: rgb(67, 66, 93);
    color: white;
    font-size: 20px;
    border-color: transparent;
    height: 50px;
    width: 150px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
`;
