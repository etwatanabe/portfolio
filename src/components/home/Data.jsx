import React from "react";
import { useTranslation } from "react-i18next";

const Data = () => {
  const { t } = useTranslation();

  return (
    <div className="home__data">
      <h1 className="home__title">Eduardo Takeshi Watanabe</h1>
      <h3 className="home__subtitle">{t("home.title")}</h3>
      <p className="home__description">{t("home.description")}</p>

    </div>
  );
};

export default Data;
