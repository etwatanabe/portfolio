import React from "react";
import "./about.css";
import Resume from "../../assets/RESUME_Eduardo_Watanabe.pdf";
import Curriculo from "../../assets/CURRICULO_Eduardo_Watanabe.pdf";
import filesSVG from "../../assets/files.svg";
import Info from "./Info";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const isEnglish = currentLanguage === "en";
  const resumeFile = isEnglish ? Resume : Curriculo;
  
  return (
    <section className="about section" id="about">
      <h2 className="section__title">{t("about.title")}</h2>
      <span className="section__subtitle">{t("about.subtitle")}</span>

      <div className="about__container container grid">
        <div className="about__img"></div>

        <div className="about__data">
          <Info />

          <p className="about__description">
            {t("about.description")}
          </p>

          <a download="" href={resumeFile} className="button button--flex" target="_blank">
            {t("about.download")}
            <img src={filesSVG} alt="" className="files__icon"></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
