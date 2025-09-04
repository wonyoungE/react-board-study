/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import * as s from "./styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByUserId } from "../../apis/user/userApis";
import defaultProfileImg from "../../assets/images/default.png";
import { FiCamera } from "react-icons/fi";
import { uploadProfileImg } from "../../apis/firebase/firebaseApis";
import { usePrincipalState } from "../../store/usePrincipalStore";
import { updateUser } from "../../apis/account/accountApis";
import { storage } from "../../apis/config/firebaseConfig";
import { ref } from "firebase/storage";

function ProfileEdit() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // 캐시에 저장되어있는 getPrincipal 가져오기
  const principalData = queryClient.getQueryData(["getPrincipal"]);
  const { isLoggedIn, principal } = usePrincipalState();

  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profileImg, setProfileImg] = useState(principal?.profie); // 미리보기용
  const [originProfileImg, setOriginProfileImg] = useState(""); // 원래 이미지 경로
  const [uploadFile, setUploadFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const imgInput = useRef();

  // useMutation
  // 성공했을 때, 실패했을 때,
  const updateUserMutation = useMutation({
    mutationKey: "updateUser",
    mutationFn: updateUser,
    onSuccess: (resp) => {
      if (resp.data.status === "success") {
        alert(resp.data.message);

        // principalData 쿼리 무효화하고 새로 요청해줘야 헤더에 있는 프로필 사진도 변경됨
        queryClient.invalidateQueries({ queryKey: ["getPrincipal"] });

        window.location.reload();
      } else if (resp.data.status === "failed") {
        alert(resp.data.message);
        return;
      }
    },
    onError: (error) => {
      alert("문제가 발생했습니다. 다시 시도해주세요.");
      return;
    },
  });

  useEffect(() => {
    if (principal?.userId !== parseInt(userId)) {
      // alert("접근 권한이 없습니다.");
      navigate(-1);
      return;
    }

    getUserByUserId(userId)
      .then((resp) => {
        if (resp.data.status === "success") {
          setUsername(resp.data.data.username);
          // setPassword(principalData?.data.data.password);
          setEmail(resp.data.data.email);
          setProfileImg(resp.data.data.profileImg || defaultProfileImg);
          setOriginProfileImg(resp.data.data.profileImg);
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

  const usernameOnChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const imgInputOnClickHandler = () => {
    imgInput.current.click();
  };

  const profileImgOnChangeHandler = (e) => {
    const file = e.target.files[0];
    if (!file) {
      // 파일 선택을 취소했을 경우
      return;
    }

    // 미리보기 위해 임시 URL 생성 및 저장
    const imageURL = URL.createObjectURL(file);
    setProfileImg(imageURL);
    setUploadFile(file); // 파일 객체도 저장
  };

  const saveBtnOnClickHandler = async () => {
    console.log("변경");
    let changeProfileImg = originProfileImg;
    let downloadURL = "";
    setIsUploading(true);

    // 새로 업로드된 파일이 있을 때 실행
    try {
      // changeProfileImg = await uploadProfileImg(uploadFile);
      downloadURL = await uploadProfileImg(
        uploadFile,
        setProgress,
        setIsUploading
      );
      console.log(downloadURL);

      // 서버에 업데이트 요청
      const updateData = {
        userId: userId,
        username: username,
        profileImg: downloadURL,
      };
      updateUserMutation.mutate(updateData);
    } catch (error) {
      alert("이미지 업로드 중 오류가 발생했습니다.");
      return;
    }
  };

  return (
    <div css={s.container}>
      <div css={s.imgBox}>
        <img src={profileImg} alt="" />
        <div css={s.imgBtn} onClick={imgInputOnClickHandler}>
          <FiCamera />
        </div>
        <input
          type="file"
          id="file-input"
          accept="image/*" // 이미지 종류의 확장자만 받을 것
          onChange={profileImgOnChangeHandler}
          ref={imgInput}
        />
      </div>
      <div css={s.inputBox}>
        <input
          type="text"
          value={username}
          onChange={usernameOnChangeHandler}
          placeholder="이름"
          required
        />
        {/* <input type="password" value={password} placeholder="비밀번호" /> */}
        <input
          type="email"
          value={email}
          disabled={true}
          placeholder="이메일"
        />
      </div>
      <div css={s.btnBox}>
        <button>취소</button>
        <button
          onClick={saveBtnOnClickHandler}
          // disabled={updateUserMutation.isPending}
          disabled={isUploading}
        >
          {isUploading ? progress : "변경하기"}
          {/* {updateUserMutation.isPending ? "저장 중..." : "저장"} */}
        </button>
      </div>
    </div>
  );
}

export default ProfileEdit;
