import React from "react";
import styled from "styled-components";
const Post = () => {
  return (
    <div>
      <div>문제를 만들어봅시다.</div>
      <InputBox>
        <input placeholder="제목을 적는 곳 입니다." />
        <input placeholder="문제를 적는 곳 입니다." />
        <input placeholder="답을 적는 곳 입니다." />
      </InputBox>
      <div>
        <button> 작성하기 </button>
        <button> 취소하기 </button>
      </div>
    </div>
  );
};

export default Post;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
