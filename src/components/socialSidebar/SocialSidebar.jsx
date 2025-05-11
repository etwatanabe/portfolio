import React from 'react';
import './socialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-box">
      <a 
        href="https://www.linkedin.com/in/etwatanabe" 
        className="social-box__link" 
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-linkedin"></i>
      </a>
      
      <a 
        href="https://github.com/etwatanabe" 
        className="social-box__link" 
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-github"></i>
      </a>
      
      <a 
        href="mailto:eduardotwatanabe@gmail.com" 
        className="social-box__link" 
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bx-envelope"></i>
      </a>
      
      <a 
        href="https://wa.me/+5573999713191" 
        className="social-box__link" 
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-whatsapp"></i>
      </a>
    </div>
  );
};

export default SocialSidebar;