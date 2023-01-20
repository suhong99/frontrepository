import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { VscTrash } from "react-icons/vsc";
import { VscEdit } from "react-icons/vsc";
import {
  __deleteComment,
  __updateComment,
  __getCommnetsByTodoId,
} from "../../redux/modules/commentsSlice";
import { useParams } from "react-router";
import { useRef } from "react";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const editCommentInput = useRef();
  editCommentInput.current = comment.comment;
  // console.log(editCommentInput.current);

  // json 형식으로 저장된 닉네임 parse로 바꾸기
  const whoAmIComment = JSON.parse(sessionStorage.getItem("memberinfo"));

  const onDeleteButtonHandler = () => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      dispatch(__deleteComment(comment.cId));
    } else {
      return;
    }
  };
  const onUpdateButtonHandler = () => {
    const result = window.confirm("수정하시겠습니까?");
    if (result) {
      // console.log(editCommentInput);
      dispatch(
        __updateComment({
          ...comment,
          cId: comment.cId,
          comment: editCommentInput.current.value,
        })
      );
      setIsEdit(!isEdit);
      // dispatch(__getCommnetsByTodoId(id));
    } else {
      return;
    }
  };

  const onEditableHandler = () => {
    setIsEdit(!isEdit);
    // editCommentInput.current.focus();
  };

  return (
    <StComment>
      {isEdit ? (
        <>
          <StInputWrapper>
            <EditMessage>{comment.nickname}이 수정할 내용 </EditMessage>
            <EditInput
              type="text"
              maxLength={100}
              name="editCommentInput"
              ref={editCommentInput}
              defaultValue={editCommentInput.current}
            />
          </StInputWrapper>
          <StControlGroup>
            <button size="small" bgcolor="#FE531F" onClick={onEditableHandler}>
              <div>취소</div>
            </button>
            <button
              size="small"
              bgcolor="#FE531F"
              onClick={onUpdateButtonHandler}
            >
              <div>저장</div>
            </button>
          </StControlGroup>
        </>
      ) : (
        <>
          <StInputWrapper>
            <div>{comment.nickname}</div>
            <div>{comment.comment}</div>
          </StInputWrapper>
          {whoAmIComment.nickname === comment.nickname ? (
            <StControlGroup>
              <button
                size="small"
                bgcolor="#FE531F"
                onClick={onEditableHandler}
              >
                <VscEdit size="16" color="#fff" />
              </button>
              <button
                size="small"
                bgcolor="#FE531F"
                onClick={onDeleteButtonHandler}
              >
                <VscTrash size="16" color="#fff" />
              </button>
            </StControlGroup>
          ) : null}
        </>
      )}
    </StComment>
  );
};

export default Comment;

const StComment = styled.div`
  border-bottom: 1px solid #eee;
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* overflow: scroll; */
`;

const StControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  div {
    width: 40px;
    height: 20px;
  }
`;

const EditInput = styled.input`
  border: 0px;
  width: 500px;
`;
const StInputWrapper = styled.div`
  width: 100%;
  /* gap: 10px; */
`;

const EditMessage = styled.div`
  font-size: 10px;
`;
