/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getUserByUserIdRequest } from "../../apis/user/userApis";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineCalendarToday, MdOutlineEmail } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";
import { CiSettings } from "react-icons/ci";
import defaultProfileImg from "../../assets/images/default.png";

function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const queryClient = useQueryClient();
  // 캐시에 저장되어있는 getPrincipal 가져오기
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  useEffect(() => {
    console.log(principalData.data.data.userId);
    getUserByUserIdRequest(userId)
      .then((resp) => {
        if (resp.data.status === "success") {
          setUserInfo(resp.data.data);
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

  return (
    <div css={s.container}>
      <div css={s.top}>
        <div css={s.leftBox}>
          <img
            src={userInfo.profileImg ? userInfo.profileImg : defaultProfileImg}
            alt="프로필 이미지"
          />
        </div>
        <div css={s.rightBox}>
          <div>
            <h2 css={s.username}>{userInfo.username}</h2>
            {principalData.data.data.userId === userInfo.userId ? (
              <button
                onClick={() => {
                  navigate(`/user/edit/${userInfo.userId}`);
                }}
              >
                <CiSettings />
              </button>
            ) : (
              <></>
            )}
          </div>
          <div css={s.email}>
            <MdOutlineEmail /> <span>{userInfo.email}</span>
          </div>
          <div css={s.createDt}>
            <MdOutlineCalendarToday />
            <span>{userInfo.createDt?.split("T")[0]}</span>
          </div>
        </div>
      </div>
      <div css={s.bottom}>
        <ul>
          <li>게시글</li>
          <li>댓글</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
