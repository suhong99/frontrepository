import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //입력값은 ref로
  const titleInput = useRef();
  const contentInput = useRef();
  const answerInput = useRef();

  //삭제하기
  const onCancle = (e) => {
    // navigate(-1);
    e.stopPropagation();
    const result = window.confirm("정말 취소할까요?");
    console.log(result);
    if (result) {
      return navigate(-1);
    } else {
      return;
    }
  };
  // 제출하기
  const onPostHandler = (e) => {
    // console.log("들어오나?");
    e.preventDefault();

    if (
      titleInput.current.value.trim() === "" ||
      answerInput.current.value.trim() === "" ||
      contentInput.current.value.trim() === ""
    ) {
      return alert("빈 값을 체크해주세요");
    }

    dispatch(
      __addPost({
        title: titleInput.current.value,
        content: contentInput.current.value,
        answer: answerInput.current.value,
      })
    );
    navigate(-1);
    // titleInput.current.focus();
  };

  // if (isLoading) {
  //   return <div>로딩 중....</div>;
  // }

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  return (
    <>
      <StContainer>
        <StForm>
          <StTitle>문제를 만들어봅시다.</StTitle>

          <StMain>
            <StinputBox>
              <StInput
                type="text"
                name="titleInput"
                ref={titleInput}
                placeholder="제목을 적어주세요."
              />
            </StinputBox>
            <StinputBox>
              <Textarea
                type="text"
                name="contentInput"
                ref={contentInput}
                placeholder="내용을 적어주세요."
              />
            </StinputBox>
            <StinputBox>
              <StInput
                type="text"
                name="answerInput"
                ref={answerInput}
                placeholder="답을 적어주세요."
              />
            </StinputBox>

            <Stbuttonwrap>
              <Stbutton onClick={onPostHandler}>작성하기</Stbutton>
              <Stbutton onClick={onCancle}>취소하기</Stbutton>
            </Stbuttonwrap>
          </StMain>
        </StForm>
      </StContainer>
    </>
  );
};

export default Post;

const StForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StContainer = styled.div`
  width: 100vh;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StTitle = styled.div`
  border-radius: 20px 20px 0 0;
  width: 700px;
  padding: 15px;
  /* margin: 10px 0 0 10px; */
  background-image: linear-gradient(
    to top,
    #1e3c72 0%,
    #1e3c72 1%,
    #2a5298 100%
  );
  margin-top: 40px;
  color: white;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

const StinputBox = styled.div`
  display: flex;
  justify-content: center;
`;

const StMain = styled.div`
  border-radius: 0 0 20px 20px;
  width: 700px;
  height: 700px;
  padding: 15px;
  /* margin: 0 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background-image: linear-gradient(
    to top,
    #bdc2e8 0%,
    #bdc2e8 1%,
    #e6dee9 100%
  );
`;

const StInput = styled.input`
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  height: 70px;
  width: 600px;
  outline: none;
  padding: 30px;
  font-size: 20px;
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  width: 600px;
  height: 300px;
  padding: 20px;
  font-size: 20px;
`;

const Stbuttonwrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const Stbutton = styled.button`
  border: none;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  color: white;
  padding: 10px;
  margin: 10px;
  background-color: #2b3348;
  cursor: pointer;
`;
