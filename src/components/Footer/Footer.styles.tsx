import { styled } from '@/stitches.config'

export const FooterWrapper = styled('footer', {
  backgroundColor: 'transparent',
  borderTop: '1px solid #ddd',
  color: '#fff',
  mx: '$6',
  py: '$2',
  '@md': {
    mx: '$7',
    py: '$5'
  },
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  justifyContent: 'space-between',
  mt: 'auto'
})

export const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '$4',
  '@md': {
    gap: '$5'
  }
})

export const LeftColumn = styled(Column, {
  alignItems: 'flex-start'
})

export const RightColumn = styled(Column, {
  alignItems: 'flex-end'
})

export const MenuList = styled('ul', {
  p: '0', // Add to reset.css
  m: '0', // Add to reset.css
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '$5',
  '@md': {
    gap: '3.8rem'
  }
})

export const MenuListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mb: '$4'
})

export const Subtitle = styled('h3', {
  color: '#fff',
  p: '0', // Add to reset.css
  m: '0', // Add to reset.css
  fontSize: '$4',
  '@md': {
    fontSize: '$6'
  },
  textAlign: 'left'
})

export const Title = styled('h2', {
  color: '#fff',
  fontSize: '$5',
  '@md': {
    fontSize: '$7'
  },
  m: '0',
  p: '0',
  textAlign: 'left'

})

export const OneBeyondIcon = styled('img', {
  height: '$8',
  '@md': {
    height: '$9'
  }
})

export const LinkIcon = styled('img', {
  height: '2rem',
  '@md': {
    height: '2.7rem'
  }
})
