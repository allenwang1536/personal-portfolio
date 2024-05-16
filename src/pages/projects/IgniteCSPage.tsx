import React from "react";
import { Section } from "../../types";
import useScrollToSection from "../../hooks/useScrollToSection";
import Outline from "../../components/Outline";

export default function IgniteCSPage({ withOutline } : { withOutline : boolean}) {
  const sections: Section[] = [
    { id: "universal-overview", title: "Overview", level: 2 },
    { id: "project-process", title: "Project Process", level: 2 },
    { id: "conclusion", title: "A Few Thoughts..", level: 2 },
  ];
  const scrollToSection = useScrollToSection();
  return (
    <div className={withOutline ? "with-outline" : ""}>
      <Outline outline={sections} handleClick={scrollToSection} />
      <div className="project">
        <div className="project-header" id="rapt-header">
          <h1 className="project-name">IgniteCS PM</h1>
          <p className="project-subheading">Project Managing IgniteCS</p>
          <p className="project-subheading">Github Projects, React, Cosmic | Spring 2024</p>
          <p className="project-subheading project-github"></p>
        </div>
        <div className="project-header" id="universal-overview">
          <h2 className="project-heading">Overview</h2>
        </div>
        <div className="project-text">
          <div className="project-section">
            <p className="project-sub-subheading">Introduction</p>
            <p>
              At Full Stack @ Brown, I had the privilege of being the Product Manager for a project aimed at creating a
              website for Brown’s IgniteCS club. IgniteCS is dedicated to teaching computer science to K-12 students.
              Leading a team of eight students, six of whom had never used React before, was both a challenging and
              rewarding experience. This was my first experience into project management, and it taught me invaluable
              lessons about leadership, adaptability, and teamwork. Read on to see how I navigated this journey!
            </p>
          </div>
        </div>
        <div className="project-header" id="project-process">
          <h2 className="project-heading">Project Process</h2>
        </div>
        <div className="project-text">
          <div className="project-section">
            <p className="project-sub-subheading">Design Phase: Aligning with Stakeholders </p>
            <p>
              My first step was meeting with the stakeholders to discuss the website’s design. They had a rough design
              from the previous semester but wanted some changes. With my experience in Figma, I implemented the
              requested changes and scheduled a follow-up meeting to ensure everyone was on the same page.
            </p>
            <div className="project-pics">
              <img src="../../images/ignite-cs/figma.png" className="project-pic-large" alt="IgniteCS Figma Designs"/>
            </div>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">Onboarding the Team</p>
            <p>
              Next, I met with my team to explain the project. It was then that I discovered six out of eight members
              had little to no experience with React. Realizing this, I pivoted from my initial plan to delegate tasks
              immediately. Instead, I had everyone complete a React bootcamp to build their foundational skills.
            </p>
            <p>
              <i>Challenge:</i> I was initially surprised by the lack of React experience on my team. My original plan
              of delegating tasks from the first week had to be quickly adjusted. The bootcamp proved to be a smart
              move, allowing everyone to get up to speed.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">Initial Task Distribution and Support</p>
            <p>
              In our next meeting, I divided the team into smaller groups. Drawing from my own experience of feeling
              overwhelmed as a novice developer, I wanted to ensure that everyone felt supported. I created two teams of
              three for the inexperienced members, each overseen by one of the more experienced members. I then walked
              everyone through the project setup, providing specific files (the JSX and CSS for the pages) to focus on
              initially.
            </p>
            <div className="project-pics">
              <img src="../../images/ignite-cs/loom.png" className="project-pic-large" alt="Loom Slack Video"/>
            </div>
            <p>
              <i>Challenge:</i> After the meeting, I realized the instructions might have been overwhelming, especially
              for beginners. To help, I created a quick 5-minute Loom video detailing the setup process, including
              commands like npm install and npm start, as well as navigating through VSCode.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">Skill Development and Advanced Features</p>
            <p>
              As the teams completed their respective pages, I started introducing more advanced React features, such as
              reusable components and media breakpoints for responsiveness. I conducted a brief crash course at the
              beginning of meetings to cover these topics.
            </p>
            <p>
              <i>Challenge:</i> It became clear that team members were progressing at different rates. Some quickly
              picked up new skills, while others struggled with basic syntax. Balancing task distribution to keep the
              project on track while ensuring everyone learned was tricky, but fun to figure out. For example, I had a
              struggling member recreate a page done by a more experienced member to reinforce best practices.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">Integrating Content Management Systems</p>
            <p>
              Once the front-end visuals were complete, we integrated content through Cosmic CMS. I tasked one of the
              more experienced members with figuring out the CMS integration and sharing the example code with the rest
              of the team. This approach allowed everyone to learn about APIs and content management without feeling
              overwhelmed.
            </p>
            <p>
              <i>Challenge:</i> Striking a balance between learning and progress was tricky. Using example code provided
              a good middle ground, ensuring members weren't too overwhelmed while still gaining valuable experience.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">Final Steps: Deployment and Reflection</p>
            <p>
              Finally, I taught the team how to create pull requests on GitHub and merge their work. Once everything was
              integrated, we deployed the website on Vercel. Seeing the culmination of everyone’s hard work was
              incredibly rewarding! You can check out the deployed site <a href="https://ignite-cs.vercel.app/" target="_blank">here!</a>
            </p>
            <div className="project-pics">
              <img src="../../images/ignite-cs/card.png" className="project-pic-large" alt="Deployed Site"/>
            </div>
          </div>
        </div>
        <div className="project-header" id="rapt-header">
          <h2 className="project-heading">A Few Thoughts...</h2>
        </div>
        <div className="project-text" id="conclusion">
          <ul>
            <li className="text-li">
              Guiding a diverse group with varying learning styles was a fascinating experience. I enjoyed the challenge
              of adapting to different situations and ensuring everyone was engaged and progressing.
            </li>
            <li className="text-li">
              This role taught me the importance of flexibility and on-the-spot problem-solving. There were times when
              pre-prepared plans had to be adjusted due to unforeseen circumstances, like missed meetings or incomplete
              tasks.
            </li>
            <li className="text-li">
              It was incredibly rewarding to witness the growth of my team members. Watching them evolve from having
              almost no web development experience to contributing to a fully deployed web application was fulfilling.
            </li>
            <li className="text-li">
              Overall, this was an incredibly learning experience, and it definitely sparked my interest in pursuing
              similar roles in the future!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
