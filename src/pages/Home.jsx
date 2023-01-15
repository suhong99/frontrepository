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
