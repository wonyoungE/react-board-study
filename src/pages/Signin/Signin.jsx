import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { signinRequest } from "../../apis/auth/authApis";

/** @jsxImportSource @emotion/react */
function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // DOM 요소에 직접 접근 => useRef
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const signupOnClickHandler = () => {
    navigate("/auth/signup");
  };

  const signinOnClickHandler = () => {
    const newErrors = {};

    if (username.trim() === "") {
      newErrors.username = "이름을 입력해 주세요.";
      setErrors(newErrors);
      usernameRef.current.focus(); // input에 focus 적용
      return;
    } else if (password.trim() === "") {
      newErrors.password = "비밀번호를 입력해 주세요.";
      setErrors(newErrors);
      passwordRef.current.focus(); // input에 focus 적용
    } else {
      setErrors(newErrors);
    }
    // 로그인 API 요청 => accessToken localStorage에 저장하기
    signinRequest({
      username: username,
      password: password,
    })
      .then((resp) => {
        console.log(resp);
        if (resp.data.status === "success") {
          localStorage.setItem("accessToken", resp.data.data);
          window.location.href = "/"; // 컴포넌트를 바꾸는 식이 아닌 페이지 새로고침
          // 컴포넌트를 바꾸는 방식으로는 헤더가 변경되지 않음
        } else if (resp.data.status === "failed") {
          alert(resp.data.message);
          return;
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        return;
      });
  };

  return (
    <div css={s.container}>
      <h1>로그인</h1>
      <div css={s.box}>
        <div css={s.inputBox}>
          <AuthInput
            type={"text"}
            placeholder={"이름"}
            state={username}
            setState={setUsername}
            hasError={!!errors.username}
            ref={usernameRef}
          />
          <AuthInput
            type={"password"}
            placeholder={"비밀번호"}
            state={password}
            setState={setPassword}
            hasError={!!errors.password}
            ref={passwordRef}
          />
        </div>
        <div css={s.errorBox}>
          {Object.keys(errors).length !== 0 ? (
            <ul>
              {Object.values(errors).map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div css={s.signinBtnBox}>
          <button
            style={{
              backgroundColor: "white",
              color: "#0d6efd",
              border: "1px solid #b6b6b6",
              boxSizing: "border-box",
            }}
            onClick={signupOnClickHandler}
          >
            회원가입
          </button>
          <button
            onClick={signinOnClickHandler}
            style={{
              backgroundColor: "#0d6efd",
              border: "1px solid #0d6efd",
              boxSizing: "border-box",
            }}
          >
            로그인
          </button>
        </div>
        <div css={s.oAuthBtnBox}>
          <a href="http://localhost:8080/oauth2/authorization/google">
            <FcGoogle size={22} />
            <span>구글로 로그인</span>
          </a>
          <a href="http://localhost:8080/oauth2/authorization/naver">
            <SiNaver size={18} color="#03C75A" />
            <span>네이버로 로그인</span>
          </a>
          <a href="http://localhost:8080/oauth2/authorization/kakao">
            <RiKakaoTalkFill size={24} color="#FEE500" />
            <span>카카오로 로그인</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signin;
