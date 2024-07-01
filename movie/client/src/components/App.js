import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
        <Router>
          <Routes>
            <Route path="/" element={<LadingPage />} />
            <Route path="/movie/:movieId" element={<Detail />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
