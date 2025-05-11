import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./themeButton.css";

const ThemeButton = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme__button" onClick={toggleTheme}>
      <i className={isDarkTheme ? "bx bx-sun" : "bx bx-moon"}></i>
    </div>
  );
};

export default ThemeButton;
