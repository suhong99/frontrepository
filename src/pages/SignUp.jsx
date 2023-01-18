import React from "react";
import MainButton from "../components/MainButton";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  __postMember,
  __checkMemberId,
  __checkMemberNick,
} from "../redux/modules/memeberListSlice";
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
  //가입 조건 초기값
  const [memberIdInput, setMemberIdInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [passCheckInput, setPassCheckInput] = useState("");

  //제출 전 조건 설정
  // 중복확인을 해야하는건 툴킷을 통해서 값 받는게 편할듯?
  // 비밀번호와 비밀번호 확인은 useState으로 하면 될듯?

  const [passPossible, setPassPossible] = useState(false);
  const [passCheckPossible, setPassCheckPossible] = useState(false);

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
            `숫자와 대,소문자가 각각 한 개 이상 포함된
  4~20글자로 된 아이디`
          )
        : setMemberIdInput("중복 확인 가능합니다.");

    if (name === "password")
      !regPassword.test(value)
        ? setPassInput(
            `숫자와 대,소문자가 각각 한 개 이상 포함된
  4~20글자로 된 비밀번호`
          )
        : //여기다가 함수 동시에 하고 싶은데 어떻게 해야할 지 모르겠어요.
          //          setPassPossible(true)
          setPassInput("");

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
      return alert("아이디,닉네임,비밀번호를 입력해주세요!");
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
  // 아이디 중복확인
  const onIdCheckhandler = (e) => {
    e.preventDefault();

    dispatch(__checkMemberId(memberId));
  };
  const onNickCheckhandler = (e) => {
    e.preventDefault();

    dispatch(__checkMemberNick(nickname));
  };

  return (
    <SignUpLayout>
      <SignUpHeader>회원가입</SignUpHeader>
      <SingUpForm onSubmit={(e) => e.preventDefault()}>
        <SignUpWords>아이디</SignUpWords>
        <InputBox>
          <SignUpInput
            type="text"
            name="memberId"
            value={memberId}
            placeholder="ID를 입력해주세요"
            onChange={onChangeMemberHandler}
          />
          <MainButton onClick={onIdCheckhandler}>중복확인</MainButton>
        </InputBox>
        <HelperText id="help-memberId" className="help">
          {memberIdInput}
        </HelperText>
        <SignUpWords>닉네임</SignUpWords>
        <InputBox>
          <SignUpInput
            type="text"
            name="nickname"
            value={nickname}
            placeholder="닉네임을 입력해주세요"
            onChange={onChangeMemberHandler}
          />
          <MainButton onClick={onNickCheckhandler}>중복확인</MainButton>
        </InputBox>
        {/* <p id="help-nickname" className="help">
          {nicknameInput}
        </p> */}
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
        <MainButton onClick={onSubmitUserHandler}> 가입하기</MainButton>
      </SingUpForm>
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

const SingUpForm = styled.form``;

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

const SignUpInput = styled.input`
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

const MainImage = styled.img`
  margin-top: 5%;
  width: 300px;
  height: 360px;
  margin: 60px 25px 0 0;
`;
