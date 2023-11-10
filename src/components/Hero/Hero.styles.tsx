import { styled } from '@/stitches.config'

export const HeroSection = styled('section', {
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  background: '$gradientBlueToGray',
  px: '2rem',
  py: '3rem',
  '@md': {
    px: '6rem',
    py: '4.5rem'
  }
})

export const HeroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '100%',
  textAlign: 'left',
  '@md': {
    flexBasis: '40%'
  }
})

export const HeroTitle = styled('h1', {
  fontSize: '$8',
  my: 0,
  '@md': {
    fontSize: '$9'
  }

})

export const HeroSubtitle = styled('h2', {
  fontSize: '$6',
  lineHeight: '1.1',
  fontWeight: 'normal',
  '@md': {
    fontSize: '$7'
  }
})

export const HeroDescription = styled('p', {
  fontSize: '$4',
  '@md': {
    fontSize: '$5'
  }

})

export const HeroImage = styled('img', {
  display: 'none',
  height: '180px',
  flexBasis: '30%',
  '@md': {
    display: 'block'
  }
})

export const HeroButton = styled('button', {
  mx: 'auto',
  width: 'max-content',
  color: 'black',
  borderRadius: '40px',
  border: '1px solid rgb(97, 218, 251)',
  padding: '0.5rem 2rem',
  background: '$gradientButton'
})
