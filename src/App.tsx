import React, { useEffect } from "react";
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

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects/spotiduo" element={<SpotiDuoPage />} />
          <Route path="/projects/aeroforecast" element={<AeroForecastPage />} />
          <Route path="/projects/gamification" element={<WingspansGamificationPage />} />
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

