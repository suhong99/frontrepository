import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../shared/Layout";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../redux/modules/postSlice";
import { BiHeart } from "react-icons/bi";

const List = () => {
  const dispatch = useDispatch();
  // const { list } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <StTitle>게시판</StTitle>
        <StContainer>
          <Stcard>
            <Stcardinner>
              <Sttop>
                <div></div>
                <div>작성일자</div>
              </Sttop>
              <Stmain></Stmain>
              <Stuser></Stuser>
              <Stfooter>
                <span>
                  <BiHeart />
                </span>
                0
              </Stfooter>
            </Stcardinner>
          </Stcard>
        </StContainer>
      </Layout>
    </>
  );
};

export default List;

const StTitle = styled.div`
  /* border: 2px solid; */
  width: 300px;
  border-radius: 10px;
  margin-top: 5%;
  background-color: #4a5b5b;
  color: white;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
`;

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
