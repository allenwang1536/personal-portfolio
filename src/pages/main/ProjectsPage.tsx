import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <div className="project-container" id="projects">
      <Link className="project-item" to="/projects/spotiduo" id="first">
        <img className="project-item-img" src="../images/spotiduo/card.png" alt="SpotiDuo" />
        <h1 className="project-item-header">SpotiDuo</h1>
        <p className="project-item-subtitle">Music-based Language Learning Application</p>
        <p className="project-item-tool">Full Stack | React/JS, Java</p>
      </Link>

      <Link className="project-item" to="/projects/aeroforecast">
        <img className="project-item-img" src="../images/aero-forecast/card.png" alt="AeroForecast" />
        <h1 className="project-item-header">AeroForecast</h1>
        <p className="project-item-subtitle">AI-Powered Weather Forecasting</p>
        <p className="project-item-tool">Machine Learning | Pytorch</p>
      </Link>

       <Link className="project-item" to="/projects/gamification">
        <img className="project-item-img" src="../images/gamification/card.png" alt="Wingspans Gamification" />
        <h1 className="project-item-header">Wingspans Gamification</h1>
        <p className="project-item-subtitle">Gamifying Wingspans Site</p>
        <p className="project-item-tool">Full Stack | React, Firestore, Figma</p>
      </Link>

      <Link className="project-item" to="/projects/ignitecs">
        <img className="project-item-img" src="../images/ignite-cs/card.png" alt="IgniteCS Project Management" />
        <h1 className="project-item-header">IgniteCS PM</h1>
        <p className="project-item-subtitle">Project Managing IgniteCS</p>
        <p className="project-item-tool">Project Management | Github Projects, React</p>
      </Link>
      
      {/* <Link className="project-item" to="/projects/sports">
        <img className="project-item-img" src="../images/sports-shop/card.png" alt="Sports Card Shop" />
        <h1 className="project-item-header">Sports Card Shop</h1>
        <p className="project-item-subtitle">Retro Sports Card Shope</p>
        <p className="project-item-tool">React, Vercel</p>
      </Link>

       <Link className="project-item" to="/projects/eastsidepockets">
        <img className="project-item-img" src="../images/east-side/card.png" alt="East Side Pockets" />
        <h1 className="project-item-header">East Side Pockets</h1>
        <p className="project-item-subtitle">Redesigning and Creating East Side Pockets Site</p>
        <p className="project-item-tool">HTML/CSS, Figma</p>
      </Link> */}
    </div>
  );
}
