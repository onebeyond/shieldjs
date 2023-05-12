import { styled } from '@/stitches.config'

export const StyledNavItem = styled('li', {
  color: 'white',
  listStyle: 'none',
  padding: '0.5rem 1rem',

  '& a': {
    textDecoration: 'none',
    color: 'white'
  },
  '&:hover': {
    background: '#61DAFB'
  },
  borderRadius: '20px',
  margin: '0 1rem',
  fontWeight: 'bold'
})
