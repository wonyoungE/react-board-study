/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./styles";

function ProfileBoard() {
  const navigate = useNavigate();
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
          {/* {boardList.map((board, index) => {
            const boardNumber = currentPage * amountBoard + index + 1;
            return (
              <tr key={board.boardId}>
                <td>{boardNumber}</td>
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
          })} */}
          <tr key={1}>
            <td>1</td>
            <td
            // onClick={() => {
            //   navigate(`/board/${board.boardId}`);
            // }}
            >
              {/* {board.title} */}
              제목
            </td>
            {/* <td>{board.createDt.split("T")[0]}</td> */}
            <td>2025.09.01</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProfileBoard;
