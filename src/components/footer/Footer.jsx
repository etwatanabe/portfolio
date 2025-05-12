import React from "react";
import "./footer.css";

const Footer = () => {
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
          
          <a href="https://wa.me/+5573999713191" className="footer__social-link" target="_blank">
            <i className="bx bxl-whatsapp"></i>
          </a>

          <a href="mailto:eduardotwatanabe@gmail.com" className="footer__social-link" target="_blank">
            <i className="bx bx-envelope"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; ETW. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
