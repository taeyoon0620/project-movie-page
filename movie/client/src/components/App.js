import { Route, BrowserRouter as Router, Routes, Link, BrowserRouter } from "react-router-dom";
import Detail from "./Detail/Detail";
import Footer from "./Footer/Footer";
import Items from "./Items/Items";
import LadingPage from "./LandingPage/LadingPage";
import NavBar from "./NavBar/NavBar";



function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
        {/* 요청된 경로로 페이지 이동 : 특정 컴포넌트로 이동 */}
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/items" element={<Items />} />
            <Route path="/detail/:movieId" element={<Detail />} />
            <Route path="/items" element={<Items />} />
            <Route path="/LandingPage" element={<LadingPage />} />
            <Route path="/" element={<LadingPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// index에서 포스터클릭하면, detail page로 이동
// 배포 url 엑셀에 입력 
// 개인 프로젝트 github pages에 배포 -> 배포 url 엑셀에 입력



// readme 파일에 기획서올리기 
