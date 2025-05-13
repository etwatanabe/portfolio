import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">ETW</h1>
        
        <div className="footer__social">

          <a href="https://www.linkedin.com/in/etwatanabe" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>

          <a href="https://www.github.com/etwatanabe" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          
          <a href="https://www.instagram.com/wtksh" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; ETW. {t("footer")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
