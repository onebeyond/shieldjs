import { styled } from 'styled-components'

export const HeroSection = styled.section`
  display: 'flex';
  flex-grow: 1;
  justify-content: 'center';
  align-items: 'center';
  background: ${props => props.theme.colors.gradientBlueToGray};
  padding: '3rem 2rem';
  ${props => props.theme.mediaQueries.md} {
    padding: '4.5rem 6rem';
  }
`

export const HeroContent = styled.div`
  display: 'flex';
  flex-direction: 'column';
  flex-basis: '100%';
  text-align: 'left';
  ${props => props.theme.mediaQueries.md} {
    flex-basis: '40%'
  }
`

export const HeroTitle = styled.h1`
  font-size: ${props => props.theme.fonSizes.xl};
  margin: '0 auto'
  ${props => props.theme.mediaQueries.md} {
    font-size: ${props => props.theme.fonSizes.xxl};
  }
`

export const HeroSubtitle = styled.h2`
  font-size: ${props => props.theme.fonSizes.lg};
  line-height: '1.1';
  font-weight: 'normal';
  ${props => props.theme.mediaQueries.md} {
    font-size: ${props => props.theme.fonSizes.xl};
  }
`

export const HeroDescription = styled.p`
  font-size: ${props => props.theme.fonSizes.xl};
  ${props => props.theme.mediaQueries.md} {
    font-size: ${props => props.theme.fonSizes.lg};
  }
`

export const HeroImage = styled.img`
  display: 'none';
  height: '180px';
  flex-basis: '30%';
  ${props => props.theme.mediaQueries.md} {
    display: 'block'
  }
`

export const HeroButton = styled.button`
  margin: 'auto';
  width: 'max-content';
  color: 'black';
  border-radius: '40px';
  border: '1px solid rgb(97; 218; 251)';
  padding: '0.5rem 2rem';
  background: ${props => props.theme.colors.gradientButton};
`
