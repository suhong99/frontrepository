import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoImage
      onClick={() => navigate("/")}
      alt="quizhubLogo"
      src="quizhubLogo.png"
    />
  );
};

export default Logo;
const LogoImage = styled.img`
  object-fit: contain;
  width: 220px;
  height: 90px;
  cursor: pointer;
`;
