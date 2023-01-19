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
  const { data } = useSelector((state) => state.comments.commentsByTodoId);
  // console.log(data);
  // console.log(data.allComments);
  useEffect(() => {
    console.log(id);
    dispatch(__getCommnetsByTodoId(id));
  }, [dispatch, id]);

  return (
    <StContainer>
      <AddCommentForm />
      <StCommentList>
        {data.allComments?.map((comment) => (
          <Comment key={comment?.cId} comment={comment} />
        ))}
      </StCommentList>
    </StContainer>
  );
};

export default Comments;

const StContainer = styled.div`
  width: 100%;
  background-color: #fff;
`;

const StToggleContainer = styled.div`
  height: 50px;
  padding: 0 12px;
  border-top: 1px solid #eee;
`;

const StCommentList = styled.div`
  height: 350px;
  overflow: scroll;
  margin-bottom: 20px;
`;
