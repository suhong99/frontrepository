import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import MainButton from "../components/MainButton";
import Modal from "react-modal";
import Login from "../components/Login";
const Home = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);
  // console.log(loginCheck);
  // const [memberinfo, setMemberinfo] = useState("");

  //로그인 체크 확인 시 세션스토리지에 저장된 유저정보 불러오기
  // 유저 정보가 존재한다면, LoginCheck를 true로
  useEffect(() => {
    const memberinfomation = JSON.parse(sessionStorage.getItem("memberinfo"));
    // setMemberinfo(memberinfomation);
    memberinfomation ? setLoginCheck(true) : setLoginCheck(false);
  }, [loginCheck]);
  //todo :로그인 확인 기능 구현해야함 -->LoginHeader
  //추후 로그인이 확인되면,  버튼을 로그인 -> 로그아웃으로 바꿔야함.
  const logOut = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <MainWrap>
      <MainHead>
        <Logo />
        <ButtonContainer>
          {loginCheck ? (
            <MainButton onClick={logOut}>로그아웃</MainButton>
          ) : (
            <MainButton onClick={() => setModalIsOpen(true)}>로그인</MainButton>
          )}

          <Modal
            style={{
              content: {
                position: "fixed",
                marginLeft: "auto",
                marginRight: "auto",
                border: "1px solid #ccc",
                width: "500px",
                marginTop: "250px",
                height: "300px",
                borderRadius: "4px",
                padding: "20px",
                display: "flex",
              },
            }}
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <Login setModalIsOpen={() => setModalIsOpen(false)} />
          </Modal>

          <MainButton onClick={() => navigate("/SignUp")}>회원가입</MainButton>
          <MainButton onClick={() => navigate("/List")}>문제풀기</MainButton>
          <MainButton onClick={() => navigate("/Post")}>퀴즈만들기</MainButton>
        </ButtonContainer>
      </MainHead>
      <MainImage
        onClick={() => navigate("/List")}
        alt="logo192"
        src="logo192.png"
      />
    </MainWrap>
  );
};

export default Home;
const MainHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  /* margin-right: 30px; */
`;

const MainImage = styled.img`
  width: 600px;
  height: 600px;
  cursor: pointer;
`;

const MainWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
`;
