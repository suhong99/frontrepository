import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoImage onClick={() => navigate("/")} alt="logo192" src="logo192.png" />
  );
};

export default Logo;
const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
`;
