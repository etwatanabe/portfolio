import React from "react";

const LeftExperienceData = ({title, subtitle, calendar}) => {
  return (
    <div className="experience__data">
      <div>
        <h3 className="experience__title">{title}</h3>
        <span className="experience__subtitle">{subtitle}</span>

        <div className="experience__subtitle"></div>
        <div className="experience__calendar">
          <i className="uil uil-calendar-alt"></i> {calendar}
        </div>
      </div>

      <div>
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
    </div>
  );
};

export default LeftExperienceData;
