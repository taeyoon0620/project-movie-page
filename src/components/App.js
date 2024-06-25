import Footer from "./footer/Footer";
import NavBar from "./NavBar/NavBar";
import Landingpage from "./LandingPage/Landingpage";
import Items from "./Items/Items";
import {} from "react-router-dom";
import { BrowserRouter as Router , Routes, Route  } from "react-router-dom";

function App() {
  return (
    <div className="App">    
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
        {/* 요청된 경로로 페이지 이동: 특정 컴포넌트 실행 */}
        <Router>
          <Routes>
            <Route path="/" element={<Landingpage />}/>
            <Route path="/items" element={<Items />}/>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}
// {/* minheight: 최소 높이 */}
export default App;

