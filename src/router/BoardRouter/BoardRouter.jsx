import { Route, Routes } from "react-router-dom";
import Board from "../../pages/Board/Board";
import BoardDetail from "../../pages/BoardDetail/BoardDetail";

function BoardRouter() {
  return (
    <Routes>
      <Route path="/list" element={<Board />}></Route>
      <Route path="/:boardId" element={<BoardDetail />}></Route>
    </Routes>
  );
}

export default BoardRouter;
