import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment } from "../../redux/modules/commentsSlice";
const AddCommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [comment, setComment] = useState({
    comment: "",
  });
  console.log(comment);

  const onAddCommentButtonHandler = (event) => {
    event.preventDefault();
    if (comment.comment.trim() === "") {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(__addComment(comment));
    setComment({
      comment: "",
    });
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  return (
    <StForm onSubmit={onAddCommentButtonHandler}>
      <input
        placeholder="댓글을 추가하세요. (100자 이내)"
        value={comment.content}
        name="comment"
        type="text"
        onChange={onChangeInputHandler}
        maxLength={100}
      />
      <button type="submit" onClick={onAddCommentButtonHandler}>
        추가하기
      </button>
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
