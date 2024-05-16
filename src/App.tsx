import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/main/HomePage";
import SpotiDuoPage from "./pages/projects/SpotiDuoPage";
import AeroForecastPage from "./pages/projects/AeroForecastPage";
import ProjectsPage from "./pages/main/ProjectsPage";
import WingspansGamificationPage from "./pages/projects/WingspansGamificationPage";
import EastSidePocketsPage from "./pages/projects/EastSidePocketsPage";
import SportsCardShop from "./pages/projects/SportsCardShop";
import ResumePage from "./pages/main/ResumePage";
import IgniteCSPage from "./pages/projects/IgniteCSPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}


function App() {
  const [addClass, setAddClass] = useState(window.innerWidth > 968);

  useEffect(() => {
    const handleResize = () => {
      setAddClass(window.innerWidth > 968);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects/spotiduo" element={<SpotiDuoPage withOutline={addClass}/>} />
          <Route path="/projects/aeroforecast" element={<AeroForecastPage />} />
          <Route path="/projects/gamification" element={<WingspansGamificationPage />} />
          <Route path="/projects/ignitecs" element={<IgniteCSPage />} />
          <Route path="/projects/eastsidepockets" element={<EastSidePocketsPage />} />
          <Route path="/projects/sports" element={<SportsCardShop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
function withRouter(ScrollToTop: ({ history }: { history: any; }) => null) {
  throw new Error("Function not implemented.");
}

