import React from "react";
import styled from "styled-components";
import { BsSuitHeartFill, BsFillChatFill } from "react-icons/bs";
import Comments from "../components/comments/Comment";
const Detail = () => {
  return (
    <>
      <StContainer>
        <StMain>
          <StTitle>문제를 풀어봅시다.</StTitle>
          <StBox boxHeight="50px">문제 제목</StBox>
          <StBox boxHeight="200px">문제 보는 곳</StBox>

          <StInputWrap>
            <StInput placeholder="답제출하는 곳" />
            <StButton>작성하기</StButton>
          </StInputWrap>
        </StMain>

        <StIcon>
          <BsSuitHeartFill color="gray" />
          <BsSuitHeartFill color="red" />
          <BsFillChatFill color="gray" />
          <BsFillChatFill color="#3e405e" />
        </StIcon>

        {/* <Comments /> */}
      </StContainer>
    </>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 1px solid red;
`;

const StMain = styled.div`
  border: 1px solid blue;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StTitle = styled.div`
  /* border: 2px solid; */
  width: 300px;
  border-radius: 20px;
  margin-top: 5%;
  background-color: #3e405e;
  color: white;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
`;

const StBox = styled.div`
  border: 3px solid;
  border-radius: 10px;
  box-sizing: border-box;
  height: ${(props) => props.boxHeight};
  width: 500px;
  outline: none;
  padding: 12px;
  font-size: 20px;
`;

const StInputWrap = styled.div`
  margin: 20px;
  display: flex;
`;
const StInput = styled.input`
  border: 3px solid;
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
  border: 1px solid;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  font-size: 25px;
  font-weight: 500;
  padding-left: 30px;
  cursor: pointer;
`;
