import { styled } from '@/stitches.config'

export const FooterWrapper = styled('footer', {
  backgroundColor: 'transparent',
  borderTop: '1px solid #ddd',
  color: '#fff',
  margin: '0 $6',
  padding: '$2 0',
  '@md': {
    margin: ' 0 $7',
    padding: '$5 0'
  },
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  justifyContent: 'space-between'
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
  padding: '0', // Add to reset.css
  margin: '0', // Add to reset.css
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
  marginBottom: '$4'
})

export const Subtitle = styled('h3', {
  color: '#fff',
  padding: '0', // Add to reset.css
  margin: '0', // Add to reset.css
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
  margin: '0',
  padding: '0',
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
