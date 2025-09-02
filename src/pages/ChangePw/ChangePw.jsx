/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";
import { changePwRequest } from "../../apis/account/accountApis";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { usePrincipalState } from "../../store/usePrincipalStore";

function ChangePw() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [newPw, setNewPw] = useState("");
  const [newPwConfirm, setNewPwConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { logout, principal } = usePrincipalState();

  // post => 뮤테이션
  const changePwMutation = useMutation({
    mutationKey: "changePw",
    mutationFn: changePwRequest,
    onSuccess: (resp) => {
      if (resp.data.status === "success") {
        alert(resp.data.message);
        logout();
        navigate("/auth/signin");
      } else if (resp.data.status === "failed") {
        alert(resp.data.message);
        setPassword("");
        setNewPw("");
        setNewPwConfirm("");
        return;
      }
    },
  });

  useEffect(() => {
    setErrorMessage("");
    if (newPw.length > 0) {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

      if (!passwordRegex.test(newPw)) {
        setErrorMessage(
          "최소 8자, 하나의 문자, 숫자 및 특수 문자를 포함해야 합니다."
        );
      }
    }
  }, [newPw, newPwConfirm]);

  const onClickChangeHandler = () => {
    if (
      password.trim() === "" ||
      newPw.trim() === "" ||
      newPwConfirm.trim() === ""
    ) {
      setErrorMessage("모든 항목을 입력해 주세요.");
      return;
    }

    if (errorMessage !== "") {
      alert("최소 8자, 하나의 문자, 숫자 및 특수 문자를 포함해야 합니다.");
      return;
    }

    if (newPwConfirm !== newPw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    changePwMutation.mutate({
      userId: principal.userId,
      oldPassword: password,
      newPassword: newPw,
      newCheckPassword: newPwConfirm,
    });
  };

  return (
    <div css={s.container}>
      <div css={s.inputBox}>
        <AuthInput
          type={"password"}
          placeholder={"현재 비밀번호"}
          state={password}
          setState={setPassword}
        />
        <AuthInput
          type={"password"}
          placeholder={"새 비밀번호"}
          state={newPw}
          setState={setNewPw}
        />
        <AuthInput
          type={"password"}
          placeholder={"새 비밀번호 확인"}
          state={newPwConfirm}
          setState={setNewPwConfirm}
        />
        <ul>{errorMessage !== "" ? <li>{errorMessage}</li> : <></>}</ul>
        <button onClick={onClickChangeHandler}>비밀번호 변경</button>
      </div>
    </div>
  );
}

export default ChangePw;
