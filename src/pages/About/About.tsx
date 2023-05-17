import { MainLayout } from '@/layout/MainLayout/MainLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const About = () => {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <h1>{t('AboutTitle')}</h1>
      <h2>{t('AboutSubtitle')}</h2>
      <p>{t('AboutTextOne')}</p>
      <p>{t('AboutTextTwo')}</p>
      <p>{t('AboutTextThree')}</p>
      <h3>{t('AboutConclusion')}</h3>
      <Link to="/">{t('AboutSendBack')}</Link>
    </MainLayout>
  )
}

export default About
