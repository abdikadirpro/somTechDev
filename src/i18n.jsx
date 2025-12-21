import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locates/eng.json";
import so from "./locates/so.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      so: { translation: so },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
