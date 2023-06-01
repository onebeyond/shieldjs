import React from 'react'
import { TechnologiesSection, TechnologiesImage, TechnologiesTitle, TechnologiesSubtitle, TechnologiesTextsContainer, TechnologiesImagesContainer } from './Technologies.styles'
import { technologiesImages } from '@/constants/technologies-images'

export const Technologies: React.FC = () => {
  return (
    <TechnologiesSection>
      <TechnologiesTextsContainer>
        <TechnologiesTitle>Which technologies do we use?</TechnologiesTitle>
        <TechnologiesSubtitle>We provide the latest technology stack</TechnologiesSubtitle>
      </TechnologiesTextsContainer>
      <TechnologiesImagesContainer>
        {technologiesImages.map(({ src, alt, key }) => <TechnologiesImage key={key} src={src} alt={alt}/>)}
      </TechnologiesImagesContainer>
    </TechnologiesSection>
  )
}
