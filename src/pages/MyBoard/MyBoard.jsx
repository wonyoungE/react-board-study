/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./styles";
import { useEffect, useState } from "react";
import { getBoardListByUserIdRequest } from "../../apis/board/boardApis";

function ProfileBoard({ userId }) {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getBoardListByUserIdRequest(userId).then((resp) => {
      if (resp.data.status === "success") {
        setBoardList(resp.data.data);
        return;
      } else if (resp.data.status === "failed") {
        setBoardList([]);
        setMessage(resp.data.message);
      }
    });
  }, []);

  return (
    <div css={s.container}>
      <table css={s.boardTable}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board, index) => {
            return (
              <tr key={board.boardId}>
                <td>{index}</td>
                <td
                  onClick={() => {
                    navigate(`/board/${board.boardId}`);
                  }}
                >
                  {board.title}
                </td>
                <td>{board.createDt.split("T")[0]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProfileBoard;
