import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const SkillIcon = ({ name, icon }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className="skills__icon-box">
      <i className={`${icon} ${!isDarkTheme ? "colored" : ""}`}></i>
      <span>{name}</span>
    </div>
  );
};

export default SkillIcon;
