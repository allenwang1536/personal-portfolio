import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function NavBar() {
  const location = useLocation();
  const hasResume = location.pathname.includes('resume');


  return (
    <header id={hasResume ? "resume-header" : ""}>
      <h2 id="name">
        <a href="/">Allen Wang</a>
      </h2>
      <nav>
        <ul className="header-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'link-current' : 'link')}>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'link-current' : 'link')}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({ isActive }) => (isActive ? 'link-current' : 'link')}>Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
