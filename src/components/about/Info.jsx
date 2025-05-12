import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-book about__icon"></i>

        <h3 className="about__title">Continuous Learning</h3>
        <span className="about__subtitle">Evolve, adapt, improve</span>
      </div>

      <div className="about__box">
        <i className="bx bx-bulb about__icon"></i>
        
        <h3 className="about__title">Problem Solving</h3>
        <span className="about__subtitle">Smart, clean solutions</span>
      </div>

      <div className="about__box">
        <i className="bx bx-group about__icon"></i>

        <h3 className="about__title">Team Collaboration</h3>
        <span className="about__subtitle">Build better together</span>
      </div>
    </div>
  );
};

export default Info;
