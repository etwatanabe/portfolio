import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './languageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
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