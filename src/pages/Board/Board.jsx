/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardListRequest } from "../../apis/board/boardApis";
import { TiPencil } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import image6 from "../../assets/images/6.jpg";

function Board() {
  const [boardList, setBoardList] = useState([]);
  // const boardList = [];
  const navigate = useNavigate();

  useEffect(() => {
    getBoardListRequest()
      .then((resp) => {
        console.log(resp.data.data);
        if (resp.data.status === "success") {
          // 객체의 배열
          setBoardList(resp.data.data);
        } else {
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
        <img src={image6}></img>
        <div>
          <h2>글 목록</h2>
          <button
            onClick={() => {
              navigate("/write");
            }}
          >
            <TiPencil /> 글쓰기
          </button>
        </div>
      </div>
      <div css={s.tableContainer}>
        <table css={s.boardTable}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {boardList.map((board) => (
              <tr key={board.boardId}>
                <td>{board.boardId}</td>
                <td
                  onClick={() => {
                    navigate(`/board/${board.boardId}`);
                  }}
                >
                  {board.title}
                </td>
                <td>{board.user.username}</td>
                <td>{board.createDt.split("T")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Board;
