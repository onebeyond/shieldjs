import { styled } from '@/stitches.config'

export const FooterWrapper = styled('footer', {
  backgroundColor: 'transparent',
  borderTop: '1px solid #ddd',
  color: '#fff',
  margin: ' 0 3.12rem',
  padding: '1.5rem 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  justifyContent: 'space-between'
})

export const LeftColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'flex-start',
  gap: '1.5rem'
})

export const RightColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'flex-end',
  justifyContent: 'start',
  gap: '1.5rem'
})

export const MenuList = styled('ul', {
  padding: '0', // Add to reset.css
  margin: '0', // Add to reset.css
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '70px'
})

export const MenuListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.5rem'
})

export const Subtitle = styled('h3', {
  color: '#fff',
  padding: '0', // Add to reset.css
  margin: '0', // Add to reset.css
  fontSize: '1.5rem',
  fontFamily: 'InriaBold'
})

export const Title = styled('h2', {
  color: '#fff',
  fontSize: '2.25rem',
  margin: '0',
  padding: '0'
})

export const OneBeyondIcon = styled('img', {
  height: '4.6rem'
})

export const LinkIcon = styled('img', {
  height: '2.7rem'
})
