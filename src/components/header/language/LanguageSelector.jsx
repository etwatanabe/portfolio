import React from 'react';
import { useTranslation } from 'react-i18next';
import './languageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button 
        onClick={() => changeLanguage('en')} 
        className={`language-btn ${i18n.language === 'en' ? 'active' : ''}`}
      >
        EN
      </button>
      <span className="language-divider">|</span>
      <button 
        onClick={() => changeLanguage('pt')} 
        className={`language-btn ${i18n.language === 'pt' ? 'active' : ''}`}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSelector;