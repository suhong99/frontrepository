import React from "react";
import MainButton from "../components/MainButton";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __postMember,
  __checkMemberId,
  __checkMemberNick,
} from "../redux/modules/memeberListSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

  // 입력 조건 정규식 validation?
  const regMemberId = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,20}$/;

  const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,20}$/;
  //최소 4자 , 하나 이상의 대.소문자 , 하나 이상의 숫자 사용

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
        : setMemberIdInput("");

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
  //닉네임 중복 학인
  const onNickCheckhandler = (e) => {
    e.preventDefault();

    dispatch(__checkMemberNick(nickname));
  };

  //중복 확인 여부
  const idNotChecked = useSelector((state) => state.memberList.idNotChecked);
  const nickNotChecked = useSelector(
    (state) => state.memberList.nickNotChecked
  );

  return (
    <SignUpLayout>
      <SingUpBox>
        <SignUpHeader>Sign Up</SignUpHeader>
        <SingUpForm onSubmit={(e) => e.preventDefault()}>
          <StInputcontainer>
            <InputBox>
              <SignUpInput
                type="text"
                name="memberId"
                value={memberId}
                placeholder="ID를 입력해주세요"
                onChange={onChangeMemberHandler}
              />
              <MainButton
                onClick={onIdCheckhandler}
                disabled={!regMemberId.test(memberId) ? true : false}
              >
                중복확인
              </MainButton>
            </InputBox>

            <HelperText id="help-memberId" className="help">
              {memberIdInput}
            </HelperText>

            <InputBox>
              <SignUpInput
                type="text"
                name="nickname"
                value={nickname}
                placeholder="닉네임을 입력해주세요"
                onChange={onChangeMemberHandler}
              />
              <MainButton onClick={onNickCheckhandler}>중복확인</MainButton>
              {/* <MainButton onClick={onNickCheckhandler} disabled={nickAble}>
                중복확인
              </MainButton> */}
            </InputBox>
          </StInputcontainer>

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

          <Stbutton>
            <MainButton
              onClick={onSubmitUserHandler}
              disabled={
                !regPassword.test(password) ||
                idNotChecked ||
                nickNotChecked ||
                !(password == passwordCheck)
              }
            >
              가입하기
            </MainButton>
          </Stbutton>
        </SingUpForm>
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

const SingUpForm = styled.form``;

const SingUpBox = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 20px;
  margin: 20px;
  width: 500px;
  background-color: white;
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

// const SignUpWords = styled.div`
//   margin: 5px;
//   margin-left: 40px;
// `;

const HelperText = styled.pre`
  /* margin: auto; */
  display: flex;
  justify-content: center;
  font-size: smaller;
  color: red;
`;
const InputBox = styled.div`
  border: 2px solid gray;
  width: 400px;
  /* height: 70px; */
  padding: 10px;
  border-radius: 10px;
  appearance: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainImage = styled.img`
  width: 310px;
  height: 370px;
  margin: 90px 25px 0 0;
`;

const StSignBack = styled.div`
  display: flex;
  width: 500px;
  display: flex;
  justify-content: center;
`;

const StInputcontainer = styled.div`
  margin-top: 30px;
`;

const PasswordBox = styled.div`
  margin-top: 30px;
`;

const Stbutton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
