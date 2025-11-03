import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations } from './translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': {
        translation: translations['pt-BR']
      },
      'pt-PT': {
        translation: translations['pt-PT']
      },
      'en': {
        translation: translations['en']
      },
      'es': {
        translation: translations['es']
      },
      'fr': {
        translation: translations['fr']
      }
    },
    fallbackLng: 'pt-BR',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;