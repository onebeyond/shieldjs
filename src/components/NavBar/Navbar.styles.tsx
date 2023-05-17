import { styled } from '@/stitches.config'

export const StyledNavMenu = styled('ul', {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0
})

export const StyledDesktopNav = styled(StyledNavMenu, {
  display: 'none',
  '@sm': {
    display: 'flex'
  }
})

export const StyledMobileNav = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '@sm': {
    display: 'none'
  }
})

export const StyledNav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#1E1E1E',
  padding: '1rem 2rem',
  width: '100vw',
  height: '6.6rem',
  boxShadow: '0 0 5px rgba(0,0,0,.2)',
  '@sm': {
    padding: '1rem 2rem'
  }
})

export const StyledMobileNavMenu = styled('ul', {
  position: 'absolute',
  top: '6.6rem',
  left: 0,
  opacity: 0,
  background: '#1F2937',
  border: '1px solid #rgb(97, 218, 251, 0.6)',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  margin: '0 5vw',
  width: '90vw',
  boxShadow: '0 0 5px rgba(0,0,0,.7)',
  zIndex: 1,
  transition: 'all .3s ease-in-out',
  '@sm': {
    display: 'none'
  },
  variants: {
    expanded: {
      true: {
        opacity: 1
      }
    }
  }
})

export const StyledImage = styled('img', {
  height: '2rem',
  '@sm': {
    height: '3rem'
  }
})

export const StyledNavButton = styled('button', {
  display: 'none',
  color: 'black',
  borderRadius: '40px',
  border: '1px solid rgb(97, 218, 251)',
  padding: '0.5rem 1rem',
  background: 'linear-gradient(180deg, rgb(97, 218, 251) 3.35%, rgba(97, 218, 251, 0.22) 100.65%)',
  '@sm': {
    display: 'flex'
  }
})
