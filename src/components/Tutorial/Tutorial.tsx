import React from 'react'
import { useTranslation } from 'react-i18next'
import { TutorialSection, TutorialTextsContainer, TutorialTitle, TutorialSubtitle } from './Tutorial.styles'

export const Tutorial: React.FC = () => {
  const { t } = useTranslation()

  return (
    <TutorialSection>
        <TutorialTextsContainer>
            <TutorialTitle>{t('TutorialTitle')}</TutorialTitle>
            <TutorialSubtitle>{t('TutorialSubtitle')}</TutorialSubtitle>
        </TutorialTextsContainer>
    </TutorialSection>
  )
}
