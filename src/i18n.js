import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      Title: 'Vite + React',
      LearnMore: 'Click on the Vite and React logos to learn more',
      TotalCount_one: 'You have clicked {{count}} time',
      TotalCount_other: 'You have clicked {{count}} times',
      EditCode: 'Edit <code>{{filename}}</code> and save to test HMR'
    }
  },
  es: {
    translation: {
      Title: 'Vite + React',
      LearnMore: 'Pulsa en los iconos de Vite and React para saber más',
      TotalCount_one: 'Has pinchado {{count}} vez',
      TotalCount_other: 'Has pinchado {{count}} veces',
      EditCode: 'Edita y guarda el archivo <code>{{filename}}</code> para testear HMR'
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
