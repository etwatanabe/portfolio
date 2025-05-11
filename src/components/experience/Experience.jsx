import React from "react";
import "./experience.css";
import ExperienceDataLeft from "./LeftExperienceData";
import ExperienceDataRight from "./ExperienceDataRight";

const Experience = () => {

  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My professional journey</span>

      <div className="experience__container container">
          <div className="experience__content">
            <ExperienceDataLeft title="Mobile Developer" subtitle="CEPEDI" calendar="07/2024 - Present" />
            <ExperienceDataRight title="Software Developer" subtitle="CEPEDI" calendar="10/2022 - 05/2023" />
            <ExperienceDataLeft title="Research, Development & Innovation Manager" subtitle="Life Jr." calendar="03/2019 - 03/2020" />
          </div>
        </div>
    </section>
  );
};

export default Experience;
