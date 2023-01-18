import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { FaRocket } from "react-icons/fa";
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
            <FaRocket onClick={goToHome} size="60" />
          </Sthome>
          <Stlogo>
            <Logo />
          </Stlogo>
          <StBack onClick={goToback}>
            <SlArrowLeft size="25" />
            <StSpan>뒤로가기</StSpan>
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
  height: auto;
  margin: 0 auto;
`;

const Stlogo = styled.div`
  /* border: 1px solid blue; */
  margin-left: 20px;
`;

const Sthead = styled.div`
  /* border: 1px solid; */
  margin: 20px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;

const Sthome = styled.div`
  /* border: 1px solid; */
  margin-top: 10px;
`;

const StBack = styled.div`
  /* border: 1px solid; */
  margin-top: 30px;
  gap: 10px;
  display: flex;
  justify-items: center;
  cursor: pointer;
`;

const StSpan = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
