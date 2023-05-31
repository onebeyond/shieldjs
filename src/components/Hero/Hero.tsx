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

export const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Shield.js</HeroTitle>
        <HeroSubtitle>The new frontend project by One&nbsp;Beyond</HeroSubtitle>
        <HeroDescription>
          From developers, to developers. Make the beginning easier with all day
          tools installed in one place.
        </HeroDescription>
        <HeroButton>Start Now</HeroButton>
      </HeroContent>
      <HeroImage src={shieldjsLogo} alt="ShieldJS logo" />
    </HeroSection>
  )
}
