import React, { useState } from "react";
import "./experience.css";
import ExperienceDataLeft from "./LeftExperienceData";
import ExperienceDataRight from "./ExperienceDataRight";

const Experience = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My professional journey</span>

      <div className="experience__container container">
        <div className="experience__tabs">
          <div className={toggleState === 1 ? "experience__button experience__active button--flex" : "experience__button button--flex"}  onClick={()=>toggleTab(1)}>
            <i className="uil uil-briefcase-alt experience__icon"></i>{" "}
            Experience
          </div>

          <div className={toggleState === 2 ? "experience__button experience__active button--flex" : "experience__button button--flex"} onClick={()=>toggleTab(2)}>
            <i className="uil uil-graduation-cap experience__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="experience__sections">
          <div className="experience__content-active">
            <ExperienceDataLeft title="Mobile Developer" subtitle="CEPEDI" calendar="07/2024 - Present" />
            <ExperienceDataRight title="Software Developer" subtitle="CEPEDI" calendar="10/2022 - 05/2023" />
            <ExperienceDataLeft title="Research, Development & Innovation Manager" subtitle="Life Jr." calendar="03/2019 - 03/2020" />
          </div>
          <div className={toggleState === 2 ? "experience__content experience__content-active" : "experience__content"}>
            <ExperienceDataRight title="Computer Science" subtitle="Universidade Estadual de Santa Cruz" calendar="03/2022 - Present" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
