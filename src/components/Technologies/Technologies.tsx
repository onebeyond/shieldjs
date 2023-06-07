import React from 'react'
import { useTranslation } from 'react-i18next'
import { TechnologiesSection, TechnologiesImage, TechnologiesTitle, TechnologiesSubtitle, TechnologiesTextsContainer, TechnologiesList, TechnologiesListItem } from './Technologies.styles'
import { technologiesImages } from '@/constants/technologies-images'

export const Technologies: React.FC = () => {
  const { t } = useTranslation()

  return (
    <TechnologiesSection>
      <TechnologiesTextsContainer>
        <TechnologiesTitle>{t('TechnologiesTitle')}</TechnologiesTitle>
        <TechnologiesSubtitle>{t('TechnologiesSubtitle')}</TechnologiesSubtitle>
      </TechnologiesTextsContainer>
      <TechnologiesList>
        {technologiesImages.map(({ src, alt, key, href }) =>
        <TechnologiesListItem key={key}>
          <a href={href} target='_blank' rel="noreferrer">
            <TechnologiesImage src={src} alt={alt}/>
          </a>
          </TechnologiesListItem>)}
      </TechnologiesList>
    </TechnologiesSection>
  )
}
