import { useNavigate, useParams } from "react-router-dom";
import * as s from "./styles";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { MdList } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";
import { deleteBoard, getBoardDetailRequest } from "../../apis/board/boardApis";
import { usePrincipalState } from "../../store/usePrincipalStore";

/** @jsxImportSource @emotion/react */
function BoardDetail() {
  const { boardId } = useParams();
  const [board, setBoard] = useState({});
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // 캐시에 저장되어있는 getPrincipal 가져오기
  const principalData = queryClient.getQueryData(["getPrincipal"]);
  const { isLoggedIn, principal } = usePrincipalState();

  useEffect(() => {
    getBoardDetailRequest(boardId)
      .then((resp) => {
        if (resp.data.status === "success") {
          console.log(resp.data.data);
          setBoard(resp.data.data);
        } else if (resp.data.status === "failed") {
          alert(resp.data.message);
          navigate("/board");
          return;
        }
        console.log(resp.data);
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        return;
      });
  }, [boardId, navigate]);

  const deleteOnClickHandler = (boardId) => {
    if (confirm("게시물을 삭제하시겠습니까?")) {
      deleteBoard(boardId)
        .then((resp) => {
          if (resp.data.status === "success") {
            alert(resp.data.message);
            navigate("/board");
            return;
          } else if (resp.data.status === "failed") {
            alert(resp.data.message);
            return;
          }
        })
        .catch((error) => {
          alert("문제가 발생했습니다. 다시 시도해주세요.");
          return;
        });
    } else {
      return;
    }
  };

  return (
    <div css={s.container}>
      <div css={s.titleContainer}>
        <h1>{board.title}</h1>
        <div>
          <p>
            작성자: <span>{board?.user?.username}</span>
          </p>
          <p>
            작성일: <span>{board?.createDt?.split("T")[0]}</span>
          </p>
        </div>
      </div>
      <div css={s.contentContainer}>{board.content}</div>
      <div css={s.buttonContainer}>
        <button
          onClick={() => {
            navigate("/board");
          }}
        >
          <MdList />
          목록
        </button>
        {principal.userId === parseInt(board?.user?.userId) ? (
          <div>
            <button
              onClick={() => {
                navigate(`/board/edit/${boardId}`);
              }}
            >
              <BiEditAlt />
              수정
            </button>
            <button
              onClick={() => {
                deleteOnClickHandler(boardId);
              }}
            >
              <RiDeleteBinLine />
              삭제
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default BoardDetail;
