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
import { EditableText } from '../EditableText/EditableText'

export const Hero: React.FC = () => {
  const { t } = useTranslation('hero')

  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>
          <EditableText name="HeroTitle" value={t('title')} />
        </HeroTitle>
        <HeroSubtitle>{t('subtitle', { interpolation: { escapeValue: true } })}</HeroSubtitle>
        <HeroDescription>{t('description')}</HeroDescription>
        <HeroButton>{t('button')}</HeroButton>
      </HeroContent>
      <HeroImage src={shieldjsLogo} alt="ShieldJS logo" />
    </HeroSection>
  )
}
