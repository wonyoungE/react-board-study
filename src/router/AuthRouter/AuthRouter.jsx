import { Route, Routes } from "react-router-dom";
import Signin from "../../pages/Signin/Signin";
import Signup from "../../pages/Signup/Signup";

function AuthRouter() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default AuthRouter;
