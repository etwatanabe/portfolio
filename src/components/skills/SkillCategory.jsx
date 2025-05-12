import React from 'react';
import SkillIcon from './SkillIcon';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="skills__category">
      <h3 className="skills__category-title">{title}</h3>
      <div className="skills__icons-grid">
        {skills.map((skill, index) => (
          <SkillIcon 
            key={index}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;