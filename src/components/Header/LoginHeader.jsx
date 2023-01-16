import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function LoginHeader() {
  //로그인 체크 전역변수 불러오기
  const test = useSelector((state) => state.memberList);
  console.log(test);
  const loginCheck = useSelector((state) => state.memberList.isLogin);
  console.log(loginCheck);
  const [memberinfo, setMemberinfo] = useState("");

  //로그인 체크 확인 시 세션스토리지에 저장된 유저정보 불러오기
  useEffect(() => {
    const memberinfomation = JSON.parse(sessionStorage.getItem("memberinfo"));
    setMemberinfo(memberinfomation);
    // loginCheck = true;
  }, [loginCheck]);

  //세션스토리지의 토큰 및 유저정보 삭제
  const logOut = () => {
    sessionStorage.clear();
    window.location.reload();
    // loginCheck = false;
  };
}

export default LoginHeader;
