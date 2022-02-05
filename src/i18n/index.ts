import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const options = {
  order: ['localStorage', 'querystring', 'navigator', 'htmlTag'],
  lookupQuerystring: 'lang',
  lookupLocalStorage: 'lang',
  caches: ['localStorage'],
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    ns: ['translation', 'success', 'errors'],
    defaultNS: 'translation',
    supportedLngs: ['de', 'en'],
    fallbackLng: {
      en: ['de'],
      default: ['de'],
    },
    debug: false,
    interpolation: { escapeValue: false },
    detection: options,
    returnObjects: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });
