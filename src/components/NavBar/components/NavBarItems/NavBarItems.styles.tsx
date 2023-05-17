import { styled } from '@/stitches.config'

export const StyledNavItem = styled('li', {
  color: 'white',
  listStyle: 'none',
  padding: '0.5rem 1rem',

  '& a': {
    textDecoration: 'none',
    color: 'white',

    '&:hover': {
      color: 'black'
    }
  },
  '&:hover': {
    background: '#61DAFB',
    transition: 'all .5s ease-in-out'
  },
  borderRadius: '20px',
  margin: '0 1rem',
  fontWeight: 'bold'
})
