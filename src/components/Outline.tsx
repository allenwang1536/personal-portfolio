import React from "react";
import "./Outline.css";

interface Section {
  id: string;
  title: string;
  level: number;
}

interface OutlineProps {
  outline: Section[];
  handleClick: (id: string) => void;
}

const Outline: React.FC<OutlineProps> = ({ outline, handleClick }) => {
  const header = document.querySelector("header");
  const offset = header ? header.clientHeight : 0; // Includes padding

  return (
    <div className="outline" style={{ top: offset + 20 }}>
      {outline.map((item) => (
        <div key={item.id} style={{ cursor: "pointer" }} onClick={() => handleClick(item.id)}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Outline;
