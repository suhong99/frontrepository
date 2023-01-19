import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getCommnetsByTodoId } from "../../redux/modules/commentsSlice";
import Comment from "./Comment";
import AddCommentForm from "./AddCommentForm";

const Comments = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isShow, setisShow] = useState(false);
  const { data } = useSelector((state) => state.comments.commentsByTodoId);
  console.log(data);
  useEffect(() => {
    if (isShow) {
      dispatch(__getCommnetsByTodoId(id));
    }
  }, [dispatch, id, isShow]);

  return (
    <StContainer isShow={isShow}>
      <StToggleContainer
        onClick={() => {
          setisShow((pre) => !pre);
        }}
      >
        {/* 아이콘들어가야함 */}
        <div>{isShow ? "눌러서 댓글내리기" : "눌러서 댓글보기"}</div>
      </StToggleContainer>
      <AddCommentForm />
      <StCommentList>
        {/* {data?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))} */}
      </StCommentList>
    </StContainer>
  );
};

export default Comments;

const StContainer = styled.div`
  height: ${({ isShow }) => (isShow ? "400px" : "50px")};
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: #fff;
  transition: height 400ms ease-in-out;
`;

const StToggleContainer = styled.div`
  height: 50px;
  padding: 0 12px;
  border-top: 1px solid #eee;
`;

const StCommentList = styled.div`
  height: 350px;
  overflow: scroll;
`;
