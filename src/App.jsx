import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainRouter from "./router/MainRouter/MainRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    // QueryClientProvider로 전체를 감싸고, props로 queryClient 넘겨주기
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* BrowserRouter는 div가 아니므로 Header를 여기 둘 순 없음 */}
        {/* body태그 안에 페이지의 모든 요소를 다 담는 main-container가 Layout이라고 생각하면 */}
        {/* 
        <body>
        <div id="layout">
        <header></header>
        얘가 바뀌는 거
        그러면.. auth-router는 왜 mainRouter안에 있는가..
        <div id="main-router"></div>
        </div>
        </div>
        </body>
        */}
        <Layout>
          <MainRouter />
          {/* 헤더를 공유하는 다른 Router가 뭐가 있는가.. */}
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
