import React from "react";
import MainButton from "../components/MainButton";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __postMember } from "../redux/modules/memeberListSlice";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    memberId: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  };
  //멤버 스테이트 형성
  const [member, setMember] = useState(initialState);
  //멤버 스테이트 구조분해 할당
  const { memberId, password, nickname, passwordCheck } = member;
  //초기값
  const [memberIdInput, setMemberIdInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [passCheckInput, setPassCheckInput] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");

  // 입력 조건 정규식
  const regMemberId = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,20}$/;

  const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,20}$/;
  //최소 4자 , 하나 이상의 대.소문자 , 하나 이상의 숫자 사용

  // const regNickname = /^[ㄱ-ㅎ|가-힣]{2,6}$/;
  //유효성 검사 및 유즈스테이트 작성
  const onChangeMemberHandler = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });

    if (name === "memberId")
      !regMemberId.test(value)
        ? setMemberIdInput(
            `숫자와 영어가 한 개 이상 포함된
  4글자 이상으로 된 비밀번호`
          )
        : setMemberIdInput("");

    if (name === "password")
      !regPassword.test(value)
        ? setPassInput(
            `숫자와 영어가 한 개 이상 포함된
  4글자 이상으로 된 비밀번호`
          )
        : setPassInput("");

    // if (name === "nickname")
    //   !regNickname.test(value)
    //     ? setNicknameInput("닉네임은 2-6자의 한글만 입력 가능합니다.")
    //     : setNicknameInput("");

    if (name === "passwordCheck")
      password !== value
        ? setPassCheckInput("비밀번호가 불일치합니다")
        : setPassCheckInput("");
  };
  // 회원가입 POST요청 및 공백 존재 시 경고창 생성
  const onSubmitUserHandler = (e) => {
    e.preventDefault();
    if (
      memberId.trim() === "" ||
      password.trim() === "" ||
      passwordCheck.trim() === "" ||
      nickname.trim() === ""
    ) {
      return alert("아이디랑 비밀번호를 입력해주세요!");
    }

    dispatch(
      __postMember({
        memberId,
        password,
        nickname,
      })
    );
    navigate("/");
  };

  return (
    <SignUpLayout>
      <SignUpHeader>회원가입</SignUpHeader>
      <SingUpForm onSubmit={onSubmitUserHandler}>
        <SignUpWords>아이디</SignUpWords>
        <InputBox>
          <SignUpInput
            type="memberId"
            name="memberId"
            value={memberId}
            placeholder="ID를 입력해주세요"
            onChange={onChangeMemberHandler}
          />
          <MainButton>인증하기</MainButton>
        </InputBox>
        <HelperText id="help-memberId" className="help">
          {memberIdInput}
        </HelperText>
        <SignUpWords>닉네임</SignUpWords>
        <InputBox>
          <SignUpInput
            type="nickname"
            name="nickname"
            value={nickname}
            placeholder="닉네임을 입력해주세요"
            onChange={onChangeMemberHandler}
          />
          <MainButton>인증하기</MainButton>
        </InputBox>
        <p id="help-nickname" className="help">
          {nicknameInput}
        </p>
        <SignUpWords>비밀번호</SignUpWords>
        <PasswordBox>
          <SingUpPasswordInput
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={onChangeMemberHandler}
          />
          <HelperText id="help-password1" className="help">
            {passInput}
          </HelperText>
          <SingUpPasswordInput
            type="password"
            name="passwordCheck"
            value={passwordCheck}
            placeholder="비밀번호 확인해주세요"
            onChange={onChangeMemberHandler}
          />
          <p id="help-password2" className="help">
            {passCheckInput}
          </p>
        </PasswordBox>
      </SingUpForm>
    </SignUpLayout>
  );
};

export default SignUp;
const SignUpLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SingUpForm = styled.form`
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

const SignUpInput = styled.input`
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

const HelperText = styled.pre`
  /* margin: auto; */
  display: flex;
  justify-content: center;
  font-size: smaller;
  color: red;
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
