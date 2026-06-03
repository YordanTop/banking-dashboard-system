import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import bgTranslation from "../../language_support/bg/translation.json"
import enTranslation from "../../language_support/en/translation.json"


i18n.use(initReactI18next).init({
    resources:{
        bg: {translation: bgTranslation},
        en: {translation: enTranslation}
    },
    lng:"bg",
    fallbackLng:"en",
      
    interpolation: {
        escapeValue: false,
    },
})

export default i18n