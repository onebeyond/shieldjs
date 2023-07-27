import { styled } from '@/stitches.config'

export const TutorialSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: '$gradientGrayToBlueToGray',
  px: '$6',
  py: '$7',
  '@md': {
    px: '6rem',
    py: '4.5rem'
  }
})

export const TutorialTextsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

export const TutorialTitle = styled('h1', {
  fontSize: '$6',
  fontWeight: 'bold',
  my: 0,
  '@md': {
    fontSize: '$7'
  }
})

export const TutorialSubtitle = styled('h2', {
  fontSize: '$4',
  fontWeight: 'normal',
  my: '$4',
  '@md': {
    fontSize: '$5'
  }
})

export const TutorialImage = styled('img', {
  my: '$4',
  maxWidth: '100%',
  height: 'auto'
})
