import React, { useEffect } from "react";
import styled from "styled-components";
import { BiPlanet, BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Card = ({ post }) => {
  const navigate = useNavigate();

  return (
    <>
      <StContainer>
        <Stcard onClick={() => navigate(`/Comments/${post.qId}`)}>
          <Stcardinner>
            <Sttop>
              <div>
                <BiPlanet />
                {post.qId}
              </div>
            </Sttop>
            <Stmain>{post.title}</Stmain>
            {/* 클릭하면 디테일페이지로 */}
            <Stfooter>
              <Stuser>{post.nickname}</Stuser>
              <StIcon>
                <BiHeart />
                <span>{post.like}</span>
              </StIcon>
            </Stfooter>
          </Stcardinner>
        </Stcard>
      </StContainer>
    </>
  );
};

export default Card;

const StContainer = styled.div`
  /* border: 1px solid; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 5%;
  gap: 10px;
`;

const Stcard = styled.div`
  border: 3px solid #dfe4ea;
  border-radius: 30px;
  width: 300px;
  height: 300px;
  background-color: white;
`;

const Stcardinner = styled.div`
  box-sizing: border-box;
  /* background-color: #4a5b5b; */
  border-radius: 30px 30px 0 80px;
  height: 230px;
  margin: 7px;
  padding-top: 5%;
  cursor: pointer;
  background-image: linear-gradient(
    to top,
    #bdc2e8 0%,
    #bdc2e8 1%,
    #e6dee9 100%
  );
`;

const Sttop = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: 5px;
  padding: 10px;
  display: flex;
  color: white;
`;

const Stmain = styled.div`
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  margin-top: 10px;
  padding: 5%;
  color: white;
`;

const Stfooter = styled.div`
  /* border: 1px solid; */
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`;
const StIcon = styled.div`
  /* border: 1px solid; */
  font-size: 20px;
  padding: 10px;
`;

const Stuser = styled.div`
  /* border: 1px solid; */
  border-radius: 10px;
  width: 60px;
  background-color: #ececec;
  margin: 5px;
  padding: 10px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
`;
