import React from "react";
import styled from "styled-components";
const MainButton = (props) => {
  return <MainButtonStyle {...props}> {props.children}</MainButtonStyle>;
};

export default MainButton;

const MainButtonStyle = styled.button`
  background-color: rgb(67, 66, 93);
  color: white;
  font-size: 20px;
  border-color: transparent;
  height: 50px;
  width: 180px;
  border-radius: 4px;
  cursor: pointer;
`;
