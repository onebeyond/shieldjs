import React from 'react'
import { useTranslation } from 'react-i18next'
import { TutorialSection, TutorialTextsContainer, TutorialTitle, TutorialSubtitle, TutorialImage } from './Tutorial.styles'
import { tutorialImage } from '@/constants/images-components'

export const Tutorial: React.FC = () => {
  const { t } = useTranslation('tutorial')

  return (
    <TutorialSection>
        <TutorialTextsContainer>
            <TutorialTitle>{t('title')}</TutorialTitle>
            <TutorialSubtitle>{t('subtitle')}</TutorialSubtitle>
        </TutorialTextsContainer>
        <TutorialImage src={tutorialImage.src} alt={tutorialImage.alt} />
    </TutorialSection>
  )
}
