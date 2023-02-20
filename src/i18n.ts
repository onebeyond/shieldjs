import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  conclusionEN, conclusionES,
  subtitleEN, subtitleES,
  textOneEN, textOneES,
  textThreeEN, textThreeES,
  textTwoEN, textTwoES,
  titleEN, titleES
} from './constants/about-texts'

const resources = {
  en: {
    translation: {
      Title: 'Vite + React',
      LearnMore: 'Click on the Vite and React logos to learn more',
      TotalCount_one: 'You have clicked {{count}} time',
      TotalCount_other: 'You have clicked {{count}} times',
      EditCode: 'Edit <code>{{filename}}</code> and save to test HMR',
      GoWaste: '🗑 Go to waste',
      NoMatchTitle: '🥲 Ooops...',
      NoMatchSubtitle: 'This page doesn´t exist',
      NoMatchSendBack: '↩️ Send me back',
      AboutSendBack: '↩️ Enough glitter, send me back',
      AboutTitle: titleEN,
      AboutSubtitle: subtitleEN,
      AboutTextOne: textOneEN,
      AboutTextTwo: textTwoEN,
      AboutTextThree: textThreeEN,
      AboutConclusion: conclusionEN
    }
  },
  es: {
    translation: {
      Title: 'Vite + React',
      LearnMore: 'Pulsa en los iconos de Vite and React para saber más',
      TotalCount_one: 'Has pinchado {{count}} vez',
      TotalCount_other: 'Has pinchado {{count}} veces',
      EditCode: 'Edita y guarda el archivo <code>{{filename}}</code> para testear HMR',
      GoWaste: '🗑 Llévame al fracaso',
      NoMatchTitle: '🥲 Upsss...',
      NoMatchSubtitle: 'Esta página no existe',
      NoMatchSendBack: '↩️ Sácame de aquí',
      AboutSendBack: '↩️ Suficiente purpurina, llévame de vuelta',
      AboutTitle: titleES,
      AboutSubtitle: subtitleES,
      AboutTextOne: textOneES,
      AboutTextTwo: textTwoES,
      AboutTextThree: textThreeES,
      AboutConclusion: conclusionES
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
