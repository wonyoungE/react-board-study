/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByUserIdRequest } from "../../apis/user/userApis";
import defaultProfileImg from "../../assets/images/default.png";
import { FiCamera } from "react-icons/fi";

function ProfileEdit({}) {
  const { userId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // 캐시에 저장되어있는 getPrincipal 가져오기
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profileImg, setProfileImg] = useState(defaultProfileImg);

  useEffect(() => {
    if (principalData?.data.data.userId !== parseInt(userId)) {
      alert("접근 권한이 없습니다.");
      navigate(-1);
      return;
    }

    getUserByUserIdRequest(userId)
      .then((resp) => {
        if (resp.data.status === "success") {
          setUsername(principalData?.data.data.username);
          setEmail(principalData?.data.data.email);
        } else if (resp.data.status === "failed") {
          alert(resp.data.message);
          return;
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        return;
      });
  }, []);

  const onChangeProfileImg = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setProfileImg(imageURL);
  };

  return (
    <div css={s.container}>
      <div css={s.imgBox}>
        <img src={profileImg} alt="" />
        <label htmlFor="file-input">
          <FiCamera />
        </label>
        <input
          type="file"
          id="file-input"
          accept="image/jpg image/jpeg image/png"
          onChange={() => onChangeProfileImg}
        />
      </div>
      <div css={s.inputBox}>
        <input type="text" placeholder="이름" />
        <input type="password" placeholder="비밀번호" />
        <input
          type="email"
          value={email}
          disabled={true}
          placeholder="이메일"
        />
      </div>
      <div css={s.btnBox}>
        <button>취소</button>
        <button>저장</button>
      </div>
    </div>
  );
}

export default ProfileEdit;
