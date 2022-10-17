import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tansKor from './kor.json'
import tansEng from './eng.json'
import tansRus from './rus.json'

const resources = {
  kor: {
    translation: tansKor
  },
  eng: {
    translation: tansEng
  },
  rus: {
    translation: tansRus
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') != undefined ? localStorage.getItem('language') : "",
    fallbackLng: "eng",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n