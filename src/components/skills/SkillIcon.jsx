import React from 'react';

const SkillIcon = ({ name, icon }) => {
  return (
    <div className="skills__icon-box">
      <i className={`${icon} colored`}></i>
      <span>{name}</span>
    </div>
  );
};

export default SkillIcon;