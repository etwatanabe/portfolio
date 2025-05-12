import React from "react";
import "./experience.css";
import ExperienceDataLeft from "./LeftExperienceData";
import ExperienceDataRight from "./ExperienceDataRight";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">{t("experience.title")}</h2>
      <span className="section__subtitle">{t("experience.subtitle")}</span>

      <div className="experience__container container">
          <div className="experience__content">
            <ExperienceDataLeft title={t("experience.job3")} subtitle="CEPEDI" calendar="07/2024 - Present" />
            <ExperienceDataRight title={t("experience.job2")} subtitle="CEPEDI" calendar="10/2022 - 05/2023" />
            <ExperienceDataLeft title={t("experience.job1")} subtitle="Life Jr." calendar="03/2019 - 03/2020" />
          </div>
        </div>
    </section>
  );
};

export default Experience;
