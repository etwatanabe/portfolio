import React from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-book about__icon"></i>

        <h3 className="about__title">{t("about.card1.title")}</h3>
        <span className="about__subtitle">{t("about.card1.description")}</span>
      </div>

      <div className="about__box">
        <i className="bx bx-bulb about__icon"></i>
        
        <h3 className="about__title">{t("about.card2.title")}</h3>
        <span className="about__subtitle">{t("about.card2.description")}</span>
      </div>

      <div className="about__box">
        <i className="bx bx-group about__icon"></i>

        <h3 className="about__title">{t("about.card3.title")}</h3>
        <span className="about__subtitle">{t("about.card3.description")}</span>
      </div>
    </div>
  );
};

export default Info;
