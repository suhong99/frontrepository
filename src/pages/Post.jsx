import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../shared/Layout";
import { clearPost, __addPost } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const isSuccess = useSelector((state) => state.records.isSuccess);
  // const { isLoading, error } = useSelector((state) => state.records);

  const [post, setPost] = useState({
    title: "",
    content: "",
    answer: "",
  });

  // useEffect(() => {
  //   if (!isSuccess) return;
  //   if (isSuccess) navigate("/list");
  //   return () => dispatch(clearPost());
  // }, [dispatch, isSuccess, navigate]);

  const onChangeHandler = (event) => {
    console.log("onChangeHandler입니다.");
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  // if (isLoading) {
  //   return <div>로딩 중....</div>;
  // }

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  console.log(post);

  return (
    <>
      <Layout>
        <StContainer>
          <StForm
            onSubmit={(e) => {
              e.preventDefault();
              if (
                post.content.trim() === "" ||
                post.title.trim() === "" ||
                post.answer.trim() === ""
              ) {
                return alert("모든 항목 입력해주세요");
              }

              dispatch(__addPost(post));
              navigate("/List");
            }}
          >
            <StMain>
              <StInput
                type="text"
                placeholder="제목을 적어주세요."
                name={"title"}
                value={post.title}
                onChange={onChangeHandler}
              />

              <Textarea
                name={"content"}
                rows="10"
                onChange={onChangeHandler}
                placeholder="내용을 적어주세요."
                value={post.content}
              />

              <StInput
                type="text"
                onChange={onChangeHandler}
                placeholder="답을 적어주세요."
                value={post.answer}
                name={"answer"}
              />
            </StMain>
            <Stbuttonwrap>
              <Stbutton type="submit">작성하기</Stbutton>
              <Stbutton type="submit">취소하기</Stbutton>
            </Stbuttonwrap>
          </StForm>
        </StContainer>
      </Layout>
    </>
  );
};

export default Post;

const StForm = styled.form`
  width: 100vh;
  height: 100vh;
`;

const StContainer = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StMain = styled.div`
  margin-top: 15%;
  width: 100vh;
  height: 50vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const StInput = styled.input`
  border: 5px solid;
  border-radius: 20px;
  box-sizing: border-box;
  height: 100px;
  width: 800px;
  outline: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 30px;
`;

const Textarea = styled.textarea`
  border: 5px solid;
  box-sizing: border-box;
  border-radius: 15px;
  width: 800px;
  padding: 12px;
  font-size: 30px;
`;

const Stbuttonwrap = styled.div`
  /* border: 2px solid; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const Stbutton = styled.button`
  border: none;
  border-radius: 10px;
  width: 300px;
  height: 55px;
  font-size: 30px;
  color: white;
  padding: 10px;
  margin: 10px;
  background-color: #2b3348;
  cursor: pointer;
`;
