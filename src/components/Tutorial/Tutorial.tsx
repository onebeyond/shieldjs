import React from 'react'
import { useTranslation } from 'react-i18next'
import { TutorialSection, TutorialTextsContainer, TutorialTitle, TutorialSubtitle, TutorialImage } from './Tutorial.styles'
import { tutorialGraphImage } from '@/constants/tutorial-texts'

export const Tutorial: React.FC = () => {
  const { t } = useTranslation()

  return (
    <TutorialSection>
        <TutorialTextsContainer>
            <TutorialTitle>{t('TutorialTitle')}</TutorialTitle>
            <TutorialSubtitle>{t('TutorialSubtitle')}</TutorialSubtitle>
        </TutorialTextsContainer>
        <TutorialImage src={tutorialGraphImage.src} alt={tutorialGraphImage.alt} />
    </TutorialSection>
  )
}
