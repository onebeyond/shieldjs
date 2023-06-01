import React from 'react'
import shieldjsLogo from '@/assets/shieldjs.svg'
import {
  HeroSection,
  HeroDescription,
  HeroSubtitle,
  HeroTitle,
  HeroContent,
  HeroImage,
  HeroButton
} from './Hero.styles'
import { useTranslation } from 'react-i18next'

export const Hero: React.FC = () => {
  const { t } = useTranslation()

  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>{t('HeroTitle')}</HeroTitle>
        <HeroSubtitle>{t('HeroSubtitle', { interpolation: { escapeValue: true } })}</HeroSubtitle>
        <HeroDescription>{t('HeroDescription')}</HeroDescription>
        <HeroButton>{t('HeroButton')}</HeroButton>
      </HeroContent>
      <HeroImage src={shieldjsLogo} alt="ShieldJS logo" />
    </HeroSection>
  )
}
