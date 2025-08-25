import Button from "../../components/Button/Button";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";
import { useEffect, useRef, useState } from "react";
import { signupRequest } from "../../apis/auth/authApis";
import { useNavigate } from "react-router-dom";

/** @jsxImportSource @emotion/react */
function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const emailRef = useRef(null);

  const signupOnClickHandler = () => {
    const newErrors = {};

    if (
      username.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      email.trim() === ""
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
    signupRequest({ username: username, password: password, email: email })
      .then((resp) => {
        console.log(resp.data);
        if (resp.data.status === "success") {
          alert(resp.data.message);
          navigate("/auth/signin");
        } else if (resp.data.status === "failed") {
          // 무엇이 문제인지(이메일 중복, 등등은 백엔드에서 처리함)
          alert(resp.data.message);
          return;
        }
      })
      .catch((error) => {
        // 여기서 말하는 error는 서버의 문제, 서버가 안켜져있거나, API 주소가 잘못됐거나..
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        return;
      });
  };

  useEffect(() => {
    const newErrors = {};
    if (password.length > 0) {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

      if (!passwordRegex.test(password)) {
        newErrors.password =
          "최소 8자, 하나의 문자, 숫자 및 특수 문자를 포함해야 합니다.";
      }
    }

    if (email.length > 0) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(email)) {
        newErrors.email = "이메일 형식에 맞게 입력해주세요.";
      }
    }

    setErrors(newErrors);
  }, [password, email]);

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
            state={email}
            setState={setEmail}
            hasError={!!errors.email || !!errors.all}
            ref={emailRef}
          />
        </div>
        <div css={s.errorBox}>
          {Object.keys(errors).length !== 0 ? (
            <ul>
              {Object.values(errors).map((e) => (
                // map 사용시 구분할 수 있게 key값 넣어주기
                <li key={e}>{e}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div css={s.btnBox}>
          <button onClick={signupOnClickHandler}>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
