import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import MainButton from "../components/MainButton";
import Modal from "react-modal";
import Login from "../components/Login";
const Home = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //todo :로그인 확인 기능 구현해야함 -->LoginHeader
  const logOut = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <MainWrap>
      <MainHead>
        <Logo />
        <ButtonContainer>
          <MainButton onClick={() => setModalIsOpen(true)}>로그인</MainButton>
          <Modal
            style={{
              content: {
                position: "fixed",
                marginLeft: "auto",
                marginRight: "auto",
                border: "5px solid #ccc",
                width: "500px",
                marginTop: "250px",
                height: "300px",
                borderRadius: "20px",
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
          <MainButton onClick={() => navigate("/Post")}>문제만들기</MainButton>
        </ButtonContainer>
      </MainHead>
      <MainImage onClick={() => navigate("/List")} alt="home" src="home.gif" />
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
  /* border: 1px solid; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* margin-right: 30px; */
  gap: 5px;
`;

const MainImage = styled.img`
  margin-top: 5%;
  width: 600px;
  height: 500px;
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
