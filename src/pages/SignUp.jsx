import React from "react";
import MainButton from "../components/MainButton";
import styled from "styled-components";
const SignUp = () => {
  return (
    <SignUpLayout>
      <SignUpHeader>회원가입</SignUpHeader>
      <SingUpBox>
        <SignUpWords>아이디</SignUpWords>
        <InputBox>
          <SingUpInput placeholder="ID" />
          <MainButton>인증하기</MainButton>
        </InputBox>
        <SignUpWords>닉네임</SignUpWords>
        <InputBox>
          <SingUpInput placeholder="닉네임 박스 크기 조절해야 할듯" />
          <MainButton>인증하기</MainButton>
        </InputBox>
        <SignUpWords>비밀번호</SignUpWords>
        <PasswordBox>
          <SingUpPasswordInput placeholder="비밀번호" />
          <SingUpPasswordInput placeholder="비밀번호 확인" />
        </PasswordBox>
      </SingUpBox>
    </SignUpLayout>
  );
};

export default SignUp;
const SignUpLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SingUpBox = styled.div`
  font-weight: bold;
  font-size: 20px;
  border: 2px solid black;
  border-radius: 15px;
  padding: 25px 5px;
  width: 500px;
`;

const SignUpHeader = styled.div`
  font-weight: bolder;
  font-size: 40px;
`;

const SingUpInput = styled.input`
  border: none;
  outline: none;
  height: 40px;
  width: 180px;
`;
const SingUpPasswordInput = styled.input`
  /* font-size: 20px; */
  height: 30px;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  margin: auto;
`;

const SignUpWords = styled.div`
  margin: 5px;
  margin-left: 40px;
`;
const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputBox = styled.div`
  border: 2px solid black;
  width: 400px;
  /* height: 70px; */
  padding: 10px;
  border-radius: 10px;
  appearance: none;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
