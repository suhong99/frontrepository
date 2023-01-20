import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment } from "../../redux/modules/commentsSlice";
import { useRef } from "react";
const AddCommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const commentInput = useRef();
  const onAddCommentButtonHandler = (event) => {
    event.preventDefault();
    if (commentInput.current.value.trim() === "") {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(__addComment({ id: id, comment: commentInput.current.value }));
  };

  return (
    <StForm>
      <AddCommentInput
        placeholder="댓글을 추가하세요. (100자 이내)"
        name="commentInput"
        type="text"
        ref={commentInput}
        maxLength={100}
      />
      <AddCommentButton onClick={onAddCommentButtonHandler}>
        추가하기
      </AddCommentButton>
    </StForm>
  );
};

export default AddCommentForm;

const StNameInput = styled.div`
  width: 150px;
`;

const StForm = styled.form`
  /* gap: 12px; */
  margin-top: 10px;
  width: 100%;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const AddCommentInput = styled.input`
  border: 1px solid #4a5b5b;
  border-radius: 10px 0 0 10px;
  box-sizing: border-box;
  height: 50px;
  width: 400px;
  outline: none;
  padding: 12px;
  font-size: 18px;
  /* flex-wrap: wrap; */
`;

const AddCommentButton = styled.button`
  border: none;
  border-radius: 0 10px 10px 0;
  height: 50px;
  width: 100px;
  background-color: #4a5b5b;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
`;
