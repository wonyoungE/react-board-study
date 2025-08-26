import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Write from "../../pages/Write/Write";
import AuthRouter from "../AuthRouter/AuthRouter";
import BoardRouter from "../BoardRouter/BoardRouter";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/*" element={<BoardRouter />} />
        <Route path="/write" element={<Write />} />
        {/* 중첩 라우터 */}
        <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>
    </>
  );
}

export default MainRouter;
