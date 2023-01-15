import React, { useRef, useState } from "react";
import styled from "styled-components";
import MainButton from "./MainButton";

const Login = (props) => {
  const [inputs, setInputs] = useState({
    memberId: "",
    password: "",
  });
  const memberIdInput = useRef();
  const passwordInput = useRef();
  const { memberId, password } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  const onReset = () => {
    setInputs({
      memberId: "",
      password: "",
    });
    memberIdInput.current.focus();
  };

  return (
    <ModalContentWrap>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // if (
          //   login.loginID.trim() === "" ||
          //   login.loginPW.trim() === "" ||
          // ) {
          //   return alert("모든 항목 입력해주세요");
          // }
        }}
      >
        <div>
          <h2> LOGIN</h2>
          <LoginInputContainer>
            <LoginInput
              // type="text"
              name="memberId"
              value={memberId}
              ref={memberIdInput}
              onChange={onChange}
              placeholder="ID를 입력해주세요"
            />

            <LoginInput
              // type="text"
              type="text"
              name="password"
              value={password}
              ref={passwordInput}
              onChange={onChange}
              placeholder="PW를 입력해주세요"
            />
          </LoginInputContainer>
          <LoginButtonContainer>
            <MainButton onClick={onReset}> 로그인하기</MainButton>
            <MainButton onClick={props.setModalIsOpen}>취소하기</MainButton>
          </LoginButtonContainer>
        </div>
      </form>
    </ModalContentWrap>
  );
};

export default Login;

const ModalContentWrap = styled.div`
  display: flex;
  margin: 0 auto;
`;

const LoginInput = styled.input`
  width: 400px;
  font-size: 20px;
  height: 40px;
  padding: 10px;
`;

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;
