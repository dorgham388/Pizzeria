/*
 * Created Date: Saturday May 15th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Wednesday, December 22nd 2021, 1:38:05 pm
 * Modified By: Amir Dorgham
 * -----
 */

import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationFr from "./locales/fr/translation.json";
import translationEn from "./locales/en/translation.json";
import translationEs from "./locales/es/translation.json";
import translationIt from "./locales/it/translation.json";
import translationRu from "./locales/ru/translation.json";
import translationDe from "./locales/de/translation.json";
// the translations
const resources = {
  fr: {
    translation: translationFr,
  },
  en: {
    translation: translationEn,
  },

  es: {
    translation: translationEs,
  },
  ru: {
    translation: translationRu,
  },

  it: {
    translation: translationIt,
  },
  de: {
    translation: translationDe,
  },
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "fr", // use fr if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
