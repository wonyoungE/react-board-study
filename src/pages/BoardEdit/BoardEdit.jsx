/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from "react-router-dom";
import * as s from "./styles";
import { useEffect, useState } from "react";
import {
  getBoardDetailRequest,
  updateBoardRequest,
} from "../../apis/board/boardApis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePrincipalState } from "../../store/usePrincipalStore";

function BoardEdit() {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState({
    title: "",
    content: "",
  });
  const queryClient = useQueryClient();
  // 캐시에 저장되어있는 getPrincipal 가져오기
  const principalData = queryClient.getQueryData(["getPrincipal"]); // 게시물 등록할 때 userId 필요함
  const { isLoggedIn, principal } = usePrincipalState();

  const updateBoardMutation = useMutation({
    mutationKey: "updateBoard", // 고유값
    mutationFn: updateBoardRequest,
    onSuccess: (resp) => {
      if (resp.data.status === "success") {
        alert(resp.data.message);
        navigate(`/board/${boardId}`);
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
    getBoardDetailRequest(boardId)
      .then((resp) => {
        if (resp.data.status === "success") {
          if (principal.userId !== resp.data.data.user.userId) {
            alert("잘못된 접근입니다.");
            navigate("/board");
          }
          setBoardData(resp.data.data);
        } else if (resp.data.status === "failed") {
          alert(resp.data.message);
          navigate("/board");
          return;
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        return;
      });
  }, [boardId, navigate]);

  const editBtnOnClickHandler = () => {
    if (
      boardData.title.trim().length === 0 ||
      boardData.content.trim().length === 0
    ) {
      alert("모든 항목을 작성해주세요.");
      return;
    }

    // 요청날릴 객체 생성
    const newBoardData = {
      boardId: boardId,
      title: boardData.title,
      content: boardData.content,
    };

    updateBoardMutation.mutate(newBoardData);
  };

  return (
    <div css={s.container}>
      <input
        type="text"
        placeholder="제목"
        value={boardData.title}
        onChange={(e) => {
          setBoardData({ ...boardData, title: e.target.value });
        }}
        css={s.title}
      />
      <textarea
        name="content"
        id="content"
        placeholder="내용을 입력해주세요."
        value={boardData.content}
        onChange={(e) => {
          setBoardData({ ...boardData, content: e.target.value });
        }}
        css={s.content}
      ></textarea>
      <div css={s.btnBox}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          취소
        </button>
        <button onClick={editBtnOnClickHandler}>수정</button>
      </div>
    </div>
  );
}

export default BoardEdit;
