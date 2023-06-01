import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  const { t } = useTranslation('notFound')

  return (
    <div>
      <h1>{t('title')}</h1>
      <h2>{t('subtitle')}</h2>
      <Link to="/">{t('sendBack')}</Link>
    </div>
  )
}

export default NotFound
