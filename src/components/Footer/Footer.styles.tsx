import { styled } from '@/stitches.config'

export const StyledFooter = styled('footer', {
  backgroundColor: 'transparent',
  borderTop: '1px solid #ddd',
  color: '#fff',
  margin: ' 0 50px',
  padding: '1.5rem 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  justifyContent: 'space-between'
})

export const StyledColumnLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'flex-start',
  gap: '1.5rem'
})

export const StyledColumnRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'flex-end',
  justifyContent: 'start',
  gap: '1.5rem'
})

export const StyledMenu = styled('ul', {
  padding: '0',
  margin: '0',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '70px'
})

export const StyledMenuItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.5rem'
})

export const StyledSubtitle = styled('h3', {
  color: '#fff',
  padding: '0',
  margin: '0',
  fontSize: '1.5rem',
  fontFamily: 'InriaBold'
})

export const StyledTitle = styled('h2', {
  color: '#fff',
  fontSize: '2.25rem',
  margin: '0',
  padding: '0'
})
