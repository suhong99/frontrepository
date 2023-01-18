import React from "react";
import MainButton from "../components/MainButton";
import styled from "styled-components";
const SignUp = () => {
  return (
    <SignUpLayout>
      <SingUpBox>
        <SignUpHeader>Sign Up</SignUpHeader>
        <InputBox>
          <SingUpInput placeholder="ID를 입력해주세요" />
          <MainButton>인증하기</MainButton>
        </InputBox>

        <InputBox>
          <SingUpInput placeholder="NickName를 입력해주세요" />
          <MainButton>인증하기</MainButton>
        </InputBox>

        <PasswordBox>
          <SingUpPasswordInput placeholder="Password를 입력해주세요" />
          <SingUpPasswordInput placeholder="Password를 확인해주세요" />
        </PasswordBox>
      </SingUpBox>
      <StSignBack>
        <MainImage alt="sign" src="signup.png" />
      </StSignBack>
    </SignUpLayout>
  );
};

export default SignUp;
const SignUpLayout = styled.div`
  margin-top: 5%;
  width: 900px;
  display: flex;
  background-image: linear-gradient(
    to top,
    #bdc2e8 0%,
    #bdc2e8 1%,
    #e6dee9 100%
  );
`;

const StSignBack = styled.div`
  display: flex;
  width: 500px;
  display: flex;
  justify-content: center;
`;

const SingUpBox = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 25px;
  margin: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 20px;
`;

const SignUpHeader = styled.div`
  font-weight: bolder;
  font-size: 40px;
  margin: 15px;
`;

const SingUpInput = styled.input`
  border: none;
  outline: none;
  height: 40px;
  width: 180px;
`;
const SingUpPasswordInput = styled.input`
  /* font-size: 20px; */
  height: 40px;
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

const MainImage = styled.img`
  margin-top: 5%;
  width: 300px;
  height: 360px;
  margin: 60px 25px 0 0;
`;
