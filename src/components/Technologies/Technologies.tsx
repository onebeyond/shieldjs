import React from 'react'
import viteLogo from '@/assets/vite.svg'
import reactLogo from '@/assets/react.svg'
import typescriptLogo from '@/assets/typescript.svg'
import playwrightLogo from '@/assets/playwright.svg'
import storybookLogo from '@/assets/storybook.svg'
import hygenLogo from '@/assets/hygen.svg'
import stitchesLogo from '@/assets/stitches.svg'
import { TechnologiesSection, TechnologiesImage, TechnologiesTitle, TechnologiesSubtitle, TechnologiesTextsContainer, TechnologiesImagesContainer } from './Technologies.styles'

const technologiesImages = [viteLogo, reactLogo, typescriptLogo, playwrightLogo, storybookLogo, hygenLogo, stitchesLogo]

export const Technologies: React.FC = () => {
  return (
    <TechnologiesSection>
      <TechnologiesTextsContainer>
        <TechnologiesTitle>Which technologies do we use?</TechnologiesTitle>
        <TechnologiesSubtitle>We provide the latest technology stack</TechnologiesSubtitle>
      </TechnologiesTextsContainer>
      <TechnologiesImagesContainer>
        {technologiesImages.map((src: string) => <TechnologiesImage key={src} src={src} />)}
      </TechnologiesImagesContainer>
    </TechnologiesSection>
  )
}
