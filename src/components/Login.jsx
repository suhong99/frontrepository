import React, { useRef, useState } from "react";
import styled from "styled-components";
import MainButton from "./MainButton";
import { __postLogin } from "../redux/modules/memeberListSlice";
import { useDispatch } from "react-redux";

const Login = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  // const [member, setMember] = useState({
  //   memberId: "",
  //   password: "",
  // });
  const memberIdInput = useRef();
  const passwordInput = useRef();
  // const { memberId, password } = member;
  // const onChange = (e) => {
  //   const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
  //   setMember({
  //     ...member, // 기존의 member 객체를 복사한 뒤
  //     [name]: value, // name 키를 가진 값을 value 로 설정
  //   });
  // };
  //전송 후  인풋 창 초기화

  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (memberIdInput.length === 0 && passwordInput.length === 0) {
      return alert("체크해주세요");
    }
    //

    dispatch(
      __postLogin({
        memberId: memberIdInput.current.value,
        password: passwordInput.current.value,
      })
    );

    memberIdInput.current.focus();
    props.setModalIsOpen();
  };

  return (
    <ModalContentWrap>
      <form>
        <div>
          <h2> LOGIN</h2>
          <LoginInputContainer>
            <LoginInput
              type="text"
              name="memberId"
              ref={memberIdInput}
              placeholder="ID를 입력해주세요"
            />

            <LoginInput
              type="password"
              name="password"
              ref={passwordInput}
              placeholder="PW를 입력해주세요"
            />
          </LoginInputContainer>
          <LoginButtonContainer>
            <MainButton onClick={onSubmitLogin}> 로그인하기</MainButton>
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
  /* width: 75vw; //todo : 기능적인 부분 먼저하고 , 반응형값으로 고치기
  font-size: 3.75vw;
  height: 7.49vw; */
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
