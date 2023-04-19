import { useEffect, useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'

import reactLogo from './assets/react.svg'
import shieldjsLogo from './assets/shieldjs.svg'
import './App.css'
import { Button } from './components/Button'
import { Link } from 'react-router-dom'
import { getCharacters } from './api/rickApi'

const languages = [
  { code: 'en', icon: '🇬🇧' },
  { code: 'es', icon: '🇪🇸' }
]

function App () {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation()

  const handleOnLang = (code: string) => i18n.changeLanguage(code).then()

  useEffect(() => {
    getCharacters().then((characters) => console.log(characters))
  }, [])

  return (
    <div className="App">
      <div>
        {languages?.map(({ code, icon }) => (
          <button className="language" key={code} onClick={() => handleOnLang(code)}>
            {icon}
          </button>
        ))}
      </div>
      <div>
        <Link to="/about">
          <img src={shieldjsLogo} className="logo shieldjs" alt="ShieldJS logo" />
        </Link>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t('Title')}</h1>
      <div className="card">
        <Button primary onClick={() => setCount((count) => count + 1)}>
          {t('TotalCount', { count })}
        </Button>
        <Trans
          i18nKey="EditCode"
          parent="p"
          values={{ filename: 'src/App.tsx' }}
          components={{ code: <code /> }}
        />
      </div>
      <p className="read-the-docs">{t('LearnMore')}</p>
      <Link to="/anyway">{t('GoWaste')}</Link><br/>
    </div>
  )
}

export default App
