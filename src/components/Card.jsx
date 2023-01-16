import React, { useEffect } from "react";
import styled from "styled-components";
import { BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Card = (post) => {
  console.log("post", post);
  const navigate = useNavigate();

  return (
    <>
      <StContainer>
        <Stcard
          onClick={() => {
            navigate("/");
          }}
        >
          <Stcardinner>
            <Sttop>
              <div>No</div>
              <div>작성일자</div>
            </Sttop>
            <Stmain>제목</Stmain>
            <Stuser>작성자</Stuser>
            <Stfooter>
              <span>
                <BiHeart />
              </span>
              0
            </Stfooter>
          </Stcardinner>
        </Stcard>
      </StContainer>
    </>
  );
};

export default Card;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 5%;
  gap: 10px;
`;

const Stcardinner = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  margin: 0 auto;
  padding-top: 5%;
`;

const Stcard = styled.div`
  border: 4px solid;
  border-radius: 30px;
  width: 300px;
  height: 300px;
`;

const Sttop = styled.div`
  /* border: 1px solid; */
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

const Stmain = styled.div`
  border-bottom: 7px solid gray;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  margin-top: 20%;
  padding: 5%;
`;

const Stuser = styled.div`
  font-size: 20px;
  margin-left: 70%;
  margin-top: 4px;
`;

const Stfooter = styled.div`
  /* border: 1px solid; */
  font-size: 30px;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;
