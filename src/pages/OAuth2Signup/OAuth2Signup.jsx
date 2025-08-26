import { useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./styles";
import { useRef, useState, useEffect } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";

/** @jsxImportSource @emotion/react */
function OAuth2Signup() {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.readOnly = true;
    emailRef.current.style.opacity = "0.8";
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  const signupOnClickHandler = () => {
    const newErrors = {};

    if (
      username.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      newErrors.all = "모든 항목을 입력해 주세요.";
      setErrors(newErrors);
      return;
    }

    if (password !== confirmPassword) {
      newErrors.password = "비밀번호를 확인해주세요.";
      setErrors(newErrors);
      passwordRef.current.focus();
      return;
    }
    setErrors(newErrors);

    // 회원가입 요청 API
  };

  return (
    <div css={s.container}>
      <h1>회원가입</h1>
      <div css={s.box}>
        <div css={s.inputBox}>
          <AuthInput
            type={"text"}
            placeholder="이름"
            state={username}
            setState={setUsername}
            hasError={!!errors.username || !!errors.all}
            ref={usernameRef}
          />
          <AuthInput
            type={"password"}
            placeholder="비밀번호"
            state={password}
            setState={setPassword}
            hasError={!!errors.password || !!errors.all}
            ref={passwordRef}
          />
          <AuthInput
            type={"password"}
            placeholder="비밀번호 확인"
            state={confirmPassword}
            setState={setconfirmPassword}
            hasError={!!errors.password || !!errors.all}
            ref={confirmPasswordRef}
          />
          <AuthInput
            type="email"
            placeholder="이메일"
            state={searchParam.get("email")}
            ref={emailRef}
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
          <button onClick={signupOnClickHandler}>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default OAuth2Signup;
