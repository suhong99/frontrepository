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
      <input
        placeholder="댓글을 추가하세요. (100자 이내)"
        name="commentInput"
        type="text"
        ref={commentInput}
        maxLength={100}
      />
      <button onClick={onAddCommentButtonHandler}>추가하기</button>
    </StForm>
  );
};

export default AddCommentForm;

const StNameInput = styled.div`
  width: 150px;
`;

const StForm = styled.form`
  gap: 12px;
  width: 100%;
  padding: 0 12px;
`;
