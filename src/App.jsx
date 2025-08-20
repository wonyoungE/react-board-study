import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainRouter from "./router/MainRouter/MainRouter";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
