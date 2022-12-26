import i18n from "i18next"
import {initReactI18next} from "react-i18next";
import translationEn from "./languages/translationEn.json"
import translationMne from './languages/translationMne.json'
import translationRu from "./languages/translationRu.json"
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

export const resources = {
    mne: {
        translation: translationMne
    },

    en: {
        translation: translationEn
    },

    ru: {
        translation: translationRu
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "mne",
    interpolation: {
        escapeValue: false
    }
})

export default i18n;

// i18n
//     .use(detector)
//     .use(initReactI18next) // passes i18n down to react-i18next
//     .init({
//         resources,
//         fallbackLng: "en", // use en if detected lng is not available
//         lang: "en",
//         // keySeparator: false, // we do not use keys in form messages.welcome
//         interpolation: {
//             escapeValue: false // react already safes from xss
//         }
//     });
//
// export default i18n;