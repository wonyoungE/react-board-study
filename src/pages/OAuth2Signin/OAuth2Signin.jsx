import { useEffect } from "react";
import * as s from "./styles";
import { useSearchParams } from "react-router-dom";

/** @jsxImportSource @emotion/react */
function OAuth2Signin() {
  const [searchParam] = useSearchParams();

  useEffect(() => {
    const accessToken = searchParam.get("accessToken");
    localStorage.setItem("accessToken", accessToken);
    // navigate("/"); // 이렇게 하면 새로고침이 아닌 컴포넌트 갈아끼우기가 돼서 localStorage에 accessToken이 저장돼도 헤더가 안바뀜
    window.location.href = "/";
  }, [searchParam]);

  return (
    <div css={s.container}>
      <p>로그인 처리 중입니다.. 잠시만 기다려주세요.</p>
    </div>
  );
}

export default OAuth2Signin;
