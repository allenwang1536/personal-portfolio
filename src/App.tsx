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
import ReactGA from "react-ga4";
import usePageTracking from "./hooks/usePageTracking";


ReactGA.initialize("G-H5YFLZE3TV");

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const PageTracker = () => {
  usePageTracking();
  return null;
};


function App() {

  const [addClass, setAddClass] = useState(window.innerWidth > 1100);

  useEffect(() => {
    const handleResize = () => {
      setAddClass(window.innerWidth > 968);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <PageTracker />
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* <Route path="/resume" element={<ResumePage />} /> */}
          <Route path="/projects/spotiduo" element={<SpotiDuoPage withOutline={addClass}/>} />
          <Route path="/projects/aeroforecast" element={<AeroForecastPage withOutline={addClass}/>} />
          <Route path="/projects/gamification" element={<WingspansGamificationPage withOutline={addClass}/>} />
          <Route path="/projects/ignitecs" element={<IgniteCSPage withOutline={addClass}/>} />
          {/* <Route path="/projects/eastsidepockets" element={<EastSidePocketsPage />} /> */}
          {/* <Route path="/projects/sports" element={<SportsCardShop />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;



