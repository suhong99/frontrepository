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
          <StTitle>문제를 만들어봅시다.</StTitle>

          <StMain>
            <StinputBox>
              <StInput
                type="text"
                placeholder="제목을 적어주세요."
                name={"title"}
                value={post.title}
                onChange={onChangeHandler}
              />
            </StinputBox>
            <StinputBox>
              <Textarea
                name={"content"}
                rows="12"
                onChange={onChangeHandler}
                placeholder="내용을 적어주세요."
                value={post.content}
              />
            </StinputBox>
            <StinputBox>
              <StInput
                type="text"
                onChange={onChangeHandler}
                placeholder="답을 적어주세요."
                value={post.answer}
                name={"answer"}
              />
            </StinputBox>

            <Stbuttonwrap>
              <Stbutton type="submit">작성하기</Stbutton>
              <Stbutton type="submit">취소하기</Stbutton>
            </Stbuttonwrap>
          </StMain>
        </StForm>
      </StContainer>
    </>
  );
};

export default Post;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StContainer = styled.div`
  width: 100vh;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StTitle = styled.div`
  border-radius: 20px 20px 0 0;
  width: 700px;
  padding: 15px;
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
  justify-content: center;
`;

const StMain = styled.div`
  border-radius: 0 0 20px 20px;
  width: 700px;
  height: 700px;
  padding: 15px;
  /* margin: 0 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background-image: linear-gradient(
    to top,
    #bdc2e8 0%,
    #bdc2e8 1%,
    #e6dee9 100%
  );
`;

const StInput = styled.input`
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  height: 60px;
  width: 600px;
  outline: none;
  padding: 30px;
  font-size: 20px;
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  width: 600px;
  padding: 12px;
  font-size: 20px;
`;

const Stbuttonwrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const Stbutton = styled.button`
  border: none;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  color: white;
  padding: 10px;
  margin: 10px;
  background-color: #2b3348;
  cursor: pointer;
`;
