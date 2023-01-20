import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import MainButton from "../components/MainButton";
import Modal from "react-modal";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin, checkLogout } from "../redux/modules/memeberListSlice";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [loginCheck, setLoginCheck] = useState(false);
  // const [memberinfo, setMemberinfo] = useState("");
  //로그인 체크 확인 시 세션스토리지에 저장된 유저정보 불러오기
  // 유저 정보가 존재한다면, LoginCheck를 true로
  const loginCheck = useSelector((state) => state.memberList.isLogin);
  useEffect(() => {
    const memberinfomation = JSON.parse(sessionStorage.getItem("memberinfo"));
    // memberinfomation ? dispatch(checkLogin()) : dispatch(checkLogout());
    if (memberinfomation) {
      dispatch(checkLogin());
    }

    // console.log(memberinfomation);
  }, [dispatch]);

  const logOut = () => {
    sessionStorage.clear();
    dispatch(checkLogout());
    // window.location.reload();
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
            <Login
              setModalIsOpen={() => setModalIsOpen(false)}
              // setModal={setModalIsOpen()}
            />
          </Modal>
          {!loginCheck ? (
            <MainButton onClick={() => navigate("/SignUp")}>
              회원가입
            </MainButton>
          ) : null}
          {/* <MainButton onClick={() => navigate("/SignUp")}>회원가입</MainButton> */}
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
