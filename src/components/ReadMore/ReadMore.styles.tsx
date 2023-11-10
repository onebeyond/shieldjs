import { styled } from '@/stitches.config'

export const ReadMoreSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  background: '$gray900',
  px: '2rem',
  py: '3rem',
  '@md': {
    px: '6rem',
    py: '4.5rem'
  }
})

export const ReadMoreTitle = styled('h1', {
  fontSize: '$7',
  fontWeight: 'bold'
})

export const ReadMoreSubtitle = styled('h2', {
  fontSize: '$6'
})

export const ReadMoreCardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  mt: '$6',
  width: '100%',
  gap: '40px',
  '@md': {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export const ReadMoreCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '250px',
  py: '$3',
  px: '$5',
  mx: '$3',
  border: '3px solid #61DAFBCC',
  borderRadius: '20px',
  boxShadow: '-10px 0px 15px 0px #61DAFB, 10px 0px 15px 0px #61DAFB, 0px 10px 15px 0px #61DAFB, 0px -10px 15px 0px #61DAFB'
})

export const ReadMoreCardTitle = styled('h2', {
  fontSize: '$6'
})

export const ReadMoreCardContent = styled('p', {
  fontSize: '$4'
})
