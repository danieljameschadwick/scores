import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as enGB from "@scores/translations/locales/en/enGB.json";

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "enGB",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      enGB: enGB,
    }
  });

export default i18n;
