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
            I'm a rising junior at <b>Brown University</b> studying Computer Science.
          </p>
          <p>
            I enjoy working on software that brings interesting ideas to life. Thus far, it's led me to building out{" "}
            <b>full-stack applications</b> and <b>machine learning models</b>, but I'm always learning new technologies
            as I take on different projects.
          </p>
          <p>
            I'm currently a Software Engineering Intern at <b>USAA Bank</b>, developing backend solutions to securely
            deliver user data. Previously, I was a SWE intern at <b>Wingspans</b>, a researcher at Brown
            CNTR lab, and a project manager at Full Stack @ Brown.
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
