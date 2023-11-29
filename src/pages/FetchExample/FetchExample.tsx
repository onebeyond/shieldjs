import { useEffect, useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'

import reactLogo from '@/assets/react.svg'
import shieldjsLogo from '@/assets/shieldjs.svg'
import './FetchExample.css'
import { Link } from 'react-router-dom'
import { getCharacter } from '@/api/rickApi'
import { Character } from '@/types'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { MainLayout } from '@/layout/MainLayout/MainLayout'

function FetchExample () {
  const [count, setCount] = useState(0)
  const [character, setCharacter] = useState<Character | null>(null)
  const { t } = useTranslation('fetchExample')

  const CHARACTER_ID = 1

  useEffect(() => {
    getCharacter(CHARACTER_ID).then(setCharacter)
  }, [])

  return (
    <MainLayout>

      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Link to="/about">
          <img src={shieldjsLogo} className="logo shieldjs" alt="ShieldJS logo" />
        </Link>
      </div>
      <h1>{t('title')}</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          {t('totalCount', { count })}
        </Button>
        <Card image={character?.image || ''} onClick={() => console.log('click')}>
          <h2>{character?.name}</h2>
        </Card>
        <Trans
          t={t}
          i18nKey="editCode"
          parent="p"
          values={{ filename: 'src/pages/FetchExample/FetchExample.tsx' }}
          components={{ code: <code /> }}
        />
      </div>
      <p className="read-the-docs">{t('learnMore')}</p>
      <Link to="/anyway">{t('goWaste')}</Link><br/>
    </MainLayout>
  )
}

export default FetchExample
