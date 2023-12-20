import { MainLayout } from '@/layout/MainLayout/MainLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { AboutWrapper, StyledImageList } from './About.styles'
import { StyledImage } from '@/components/NavBar/Navbar.styles'
import shieldS from '@/assets/shield_s.webp'
import shieldH from '@/assets/shield_h.webp'
import shieldI from '@/assets/shield_i.webp'
import shieldE from '@/assets/shield_e.webp'
import shieldL from '@/assets/shield_l.webp'
import shieldD from '@/assets/shield_d.webp'
import shieldJ from '@/assets/shield_j.webp'
import shieldS2 from '@/assets/shield_s2.webp'

export const About = () => {
  const { t } = useTranslation('about')
  const imagesImported = [
    shieldS,
    shieldH,
    shieldI,
    shieldE,
    shieldL,
    shieldD,
    shieldJ,
    shieldS2
  ]

  return (
    <MainLayout>
      <AboutWrapper>
        <h1>{t('title')}</h1>
        <StyledImageList>
          {imagesImported.map((image, index) => (
              <StyledImage key={index} src={image} alt="ShieldJS logo" />
          ))}
        </StyledImageList>
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
