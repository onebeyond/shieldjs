import React from 'react'
import { useTranslation } from 'react-i18next'
import { TechnologiesSection, TechnologiesImage, TechnologiesTitle, TechnologiesSubtitle, TechnologiesTextsContainer, TechnologiesImagesContainer } from './Technologies.styles'
import { technologiesImages } from '@/constants/technologies-images'

export const Technologies: React.FC = () => {
  const { t } = useTranslation()

  return (
    <TechnologiesSection>
      <TechnologiesTextsContainer>
        <TechnologiesTitle>{t('TechnologiesTitle')}</TechnologiesTitle>
        <TechnologiesSubtitle>{t('TechnologiesSubtitle')}</TechnologiesSubtitle>
      </TechnologiesTextsContainer>
      <TechnologiesImagesContainer>
        {technologiesImages.map(({ src, alt, key }) => <TechnologiesImage key={key} src={src} alt={alt}/>)}
      </TechnologiesImagesContainer>
    </TechnologiesSection>
  )
}
