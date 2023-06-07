import { styled } from '@/stitches.config'

export const TechnologiesSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: '$gray900',
  px: '2rem',
  py: '3rem',
  '@md': {
    px: '6rem',
    py: '4.5rem'
  }
})

export const TechnologiesTextsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

export const TechnologiesTitle = styled('h1', {
  fontSize: '$6',
  fontWeight: 'bold',
  my: 0,
  '@md': {
    fontSize: '$7'
  }
})

export const TechnologiesSubtitle = styled('h2', {
  fontSize: '$4',
  fontWeight: 'normal',
  my: '1rem',
  '@md': {
    fontSize: '$5'
  }
})

export const TechnologiesImagesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  my: '1rem'
})

export const TechnologiesImage = styled('img', {
  width: '5rem'
})
