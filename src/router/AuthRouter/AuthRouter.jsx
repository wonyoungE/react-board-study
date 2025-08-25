import { Route, Routes } from "react-router-dom";
import Signin from "../../pages/Signin/Signin";
import Signup from "../../pages/Signup/Signup";
import OAuth2 from "../../pages/OAuth2/OAuth2";
import OAuth2Merge from "../../pages/OAuth2Merge/OAuth2Merge";
import OAuth2Signup from "../../pages/OAuth2Signup/OAuth2Signup";

function AuthRouter() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/oauth2" element={<OAuth2 />} />
      <Route path="/oauth2/signup" element={<OAuth2Signup />} />
      <Route path="/oauth2/merge" element={<OAuth2Merge />} />
    </Routes>
  );
}

export default AuthRouter;
