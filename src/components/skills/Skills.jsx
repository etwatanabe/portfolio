import React from "react";
import "./skills.css";
import SkillContent from "./SkillsContent.jsx";
import SkillData from "./SkillData.jsx";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h3 className="section__title">Skills</h3>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <SkillContent title="Languages">
          <SkillData name="C#" level="Intermediate"/>
          <SkillData name="Python" level="Intermediate"/>
          <SkillData name="JavaScript" level="Intermediate"/>
          <SkillData name="TypeScript" level="Basic"/>
          <SkillData name="Java" level="Basic"/>
        </SkillContent>

        <SkillContent title="Backend">
          <SkillData name="Node.js" level="Intermediate"/>
          <SkillData name="Express" level="Intermediate"/>
          <SkillData name="Nest.js" level="Basic"/>
          <SkillData name="ASP .NET" level="Basic"/>
        </SkillContent>

        <SkillContent title="Frontend">
          <SkillData name="React" level="Intermediate"/>
          <SkillData name="Angular" level="Basic"/>
          <SkillData name="Next.js" level="Basic"/>
        </SkillContent>

        <SkillContent title="Databases">
          <SkillData name="PostgreSQL" level="Intermediate"/>
          <SkillData name="MongoDB" level="Intermediate"/>
          <SkillData name="MySQL" level="Basic"/>
          <SkillData name="SQL Server" level="Basic"/>
        </SkillContent>
      </div>
    </section>
  );
};

export default Skills;
