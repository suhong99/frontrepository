import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";
const LoginHeader = () => {
  const navigate = useNavigate();
  const checkLogin = sessionStorage.getItem("memberinfo");
  const locationNow = useLocation();
  //로그인이 필요하지 않는 페이지를 제외한다.
  // 로그인이 필요한 페이지에서 로그인했는지 검사한다
  // 로그인 안했으면 홈으로 보낸다.

  const goToHome = () => {
    navigate("/");
  };
  useEffect(() => {
    if (
      checkLogin === null &&
      locationNow.pathname !== "/" &&
      locationNow.pathname !== "/SignUp"
    ) {
      alert("로그인 해주세요.");
      goToHome();
    }
  }, [checkLogin, locationNow.pathname]);
};

export default LoginHeader;
