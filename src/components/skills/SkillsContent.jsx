import React from "react";
import "./skills.css";

const SkillContent = ({ title, children }) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{title}</h3>
      <div className="skills__box">
        <div className="skills__group">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SkillContent;