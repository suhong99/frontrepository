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
  height: 35px;
  width: 150px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: gray;
    color: white;
  }
`;
