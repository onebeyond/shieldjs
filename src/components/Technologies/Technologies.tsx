import React from 'react'
import { useTranslation } from 'react-i18next'
import { TechnologiesSection, TechnologiesImage, TechnologiesTitle, TechnologiesSubtitle, TechnologiesTextsContainer, TechnologiesList, TechnologiesListItem } from './Technologies.styles'
import { technologiesImages } from '@/constants/images-components'

export const Technologies: React.FC = () => {
  const { t } = useTranslation('technologies')

  return (
    <TechnologiesSection>
      <TechnologiesTextsContainer>
        <TechnologiesTitle>{t('title')}</TechnologiesTitle>
        <TechnologiesSubtitle>{t('subtitle')}</TechnologiesSubtitle>
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
