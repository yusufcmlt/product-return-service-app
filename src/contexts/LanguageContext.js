import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageContext = createContext();

function useLanguage() {
  return useContext(LanguageContext);
}

function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', 'tr');

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'tr' : 'en'));
  };

  const value = { language, changeLanguage };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export { useLanguage, LanguageProvider };
