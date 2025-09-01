/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import { addBoardRequest } from "../../apis/board/boardApis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // 캐시에 저장되어있는 getPrincipal 가져오기
  const principalData = queryClient.getQueryData(["getPrincipal"]); // 게시물 등록할 때 userId 필요함

  const addBoardMutation = useMutation({
    mutationKey: "addBoard",
    mutationFn: addBoardRequest,
    onSuccess: (resp) => {
      console.log(resp);
      if (resp.data.status === "success") {
        alert(resp.data.message);
        navigate("/board");
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

  const addOnClickHandler = () => {
    if (title.trim().length === 0 || content.trim().length === 0) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // api요청
    // mutate 안에 body에 들어갈 것들 넣어주면 됨
    // mutate의 장점: 성공 / 에러 분기 미리 잡아둘 수 있음
    // mutate는 어떨 때 씀? 상태(useState)에 바로 반영해야하는 게 있으면 사용
    // ex) 마이페이지에 닉네임을 변경하고 나서 (userId를 principal에서 가져올 것임) 다시 서버에 요청하지 않아도 principalData에 바로 반영하도록 할 수 있음
    // 보통 post 요청에 많이 쓰임, get에는 안쓰임
    addBoardMutation.mutate({
      title: title,
      content: content,
      userId: principalData.data.data.userId,
    });
  };

  return (
    <div css={s.container}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        css={s.title}
      />
      <textarea
        name="content"
        id="content"
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        css={s.content}
      ></textarea>
      <div css={s.btnBox}>
        <button onClick={addOnClickHandler}>게시물 등록하기</button>
      </div>
    </div>
  );
}

export default Write;
