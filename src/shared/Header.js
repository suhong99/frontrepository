import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { IoIosHome } from "react-icons/io";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToback = () => {
    navigate(-1);
  };
  const locationNow = useLocation();

  if (locationNow.pathname === "/") return null;

  return (
    <>
      <Stcontainer>
        <Sthead>
          <Sthome>
            <IoIosHome onClick={goToHome} size="85" />
          </Sthome>
          <Stlogo>
            <Logo />
          </Stlogo>
          <StBack onClick={goToback}>
            <SlArrowLeft size="50" />
            <div>뒤로가기</div>
          </StBack>
        </Sthead>
      </Stcontainer>
    </>
  );
};

export default Header;

const Stcontainer = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  margin: 0 auto;
`;

const Stlogo = styled.div`
  /* border: 1px solid blue; */
  width: 20%;
  display: flex;
  justify-content: center;
`;

const Sthead = styled.div`
  /* border: 1px solid; */
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Sthome = styled.div`
  /* border: 1px solid; */
`;

const StBack = styled.div`
  /* border: 1px solid; */
  font-size: 40px;
  font-weight: 600;
  padding: 10px;
  margin: 10px;
  gap: 15px;
  display: flex;
  justify-items: center;
  cursor: pointer;
`;
