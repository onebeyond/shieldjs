import { MainLayout } from '@/layout/MainLayout/MainLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { AboutWrapper } from './About.styles'

export const About = () => {
  const { t } = useTranslation('about')

  return (
    <MainLayout>
      <AboutWrapper>
        <h1>{t('title')}</h1>
        <h2>{t('subtitle')}</h2>
        <p>{t('description.p1')}</p>
        <p>{t('description.p2')}</p>
        <p>{t('description.p3')}</p>
        <h3>{t('conclusion')}</h3>
        <Link to="/">{t('sendBack')}</Link>
      </AboutWrapper>
    </MainLayout>
  )
}

export default About
