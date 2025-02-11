import React from "react";

export default function HomePage() {
  return (
    <div id="main-container">
      <img id="profile-pic" src="images/profile-pic.png" alt="Allen at Boston Chinatown!" />
      <div id="about">
        <h1 className="heading" id="hi">
          Hello, I'm Allen.
        </h1>
        <div id="intro">
          <p>
            I'm a student at <b>Brown University</b> studying Computer Science.
          </p>
          <p>
            I recently completed a SWE Internship at <b>USAA Bank</b>, where I developed backend solutions to securely
            deliver user data. Previously, I was a SWE intern at <a href="https://www.wingspans.com/" target="_blank">Wingspans (Tech Stars '24)</a>, a researcher at <a href="https://vivo.brown.edu/display/suresh#" target="_blank">Brown
            CNTR lab</a>, and a project manager at <a href="https://fullstackatbrown.github.io/website/" target="_blank"> Full Stack @ Brown </a>.
          </p>
          <p>When I'm not coding, you can find me running by the river, reading YA novels, or watching NBA.</p>
          <p>Thanks for dropping by!</p>
        </div>
        <div id="social">
        <a href="https://github.com/allenwang1536" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/allen-wang1536/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a>
          <a href="mailto:allen_wang1@brown.edu" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </div>
  );
}
