import { styled } from '@/stitches.config'

export const TechnologiesSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: '$gray900',
  px: '$6',
  py: '$7',
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
  my: '$4',
  '@md': {
    fontSize: '$5'
  }
})

export const TechnologiesList = styled('ul', {
  p: 0,
  mt: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  my: '$4',
  '@md': {
    my: '$4',
    flexDirection: 'row',
    gap: '$6'
  }
})

export const TechnologiesImage = styled('img', {
  width: '3rem',
  '@md': {
    width: '5rem'
  }
})

export const TechnologiesListItem = styled('li', {
  listStyle: 'none'
})
