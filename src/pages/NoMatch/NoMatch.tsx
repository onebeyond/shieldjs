import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const NoMatch = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('NoMatchTitle')}</h1>
      <h2>{t('NoMatchSubtitle')}</h2>
      <Link to="/">{t('NoMatchSendBack')}</Link>
    </div>
  )
}

export default NoMatch
