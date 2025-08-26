import { useNavigate, useParams } from "react-router-dom";
import * as s from "./styles";
import { useEffect, useState } from "react";
import { getBoardDetailRequest } from "../../apis/board/boardApis";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

/** @jsxImportSource @emotion/react */
function BoardDetail() {
  const { boardId } = useParams();
  const [board, setBoard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getBoardDetailRequest(boardId)
      .then((resp) => {
        if (resp.data.status === "success") {
          setBoard(resp.data.data);
        } else {
          alert(resp.data.message);
          return;
        }
        console.log(resp.data);
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        return;
      });
  }, []);

  return (
    <div css={s.container}>
      <div css={s.titleContainer}>
        <h1>{board.title}</h1>
        <p>작성일: {board.createDt?.split("T")[0]}</p>
      </div>
      <div css={s.contentContainer}>{board.content}</div>
      <div css={s.buttonContainer}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <BiEditAlt />
          수정
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <RiDeleteBinLine />
          삭제
        </button>
      </div>
    </div>
  );
}

export default BoardDetail;
