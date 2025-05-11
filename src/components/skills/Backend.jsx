import React from "react";
import SkillData from "./SkillData";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>
        <div className="skills__box">
          <div className="skills__group">
            <SkillData name="Node.js" level="Intermediate" />
            <SkillData name=".NET" level="Basic" />
            <SkillData name="Java" level="Basic" />
          </div>
        </div>
    </div>
  );
};

export default Backend;
