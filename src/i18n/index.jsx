import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import fa from "./fa";

i18n.use(initReactI18next).init({
   resources: {
      en: {
         translation: en,
      },
      fa: {
         translation: fa,
      },
   },
   lng: localStorage.getItem("lang") || "en",
   fallbackLng: "en",

   interpolation: {
      escapeValue: false,
   },
});

export default i18n;
