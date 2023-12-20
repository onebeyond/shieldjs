import styled from 'styled-components'

export const StyledNavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledDesktopNav = styled(StyledNavMenu)`
  display: none;
  ${props => props.theme.mediaQueries.sm} {
    display: flex;
  }
`

export const StyledMobileNav = styled.div`
  display: flex;
  align-items: center;
    ${props => props.theme.mediaQueries.sm} {
    display: none;
  }
`

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1E1E1E;
  padding: 1rem 2rem;
  width: 100vw;
  height: 6.6rem;
  box-shadow: 0 9px 15px rgba(0,0,0,0.4);
  ${props => props.theme.mediaQueries.sm} {
    padding: 1rem 2rem;
  }
`

export const StyledMobileNavMenu = styled.ul<{ expanded: boolean }>`
  position: absolute;
  top: 6.6rem;
  left: 0;
  background: #1F2937;
  border: 1px solid rgb(97, 218, 251, 0.6);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 0 5vw;
  width: 90vw;
  box-shadow: 0 0 5px rgba(0,0,0,.7);
  z-index: 1;
  transition: all .3s ease-in-out;
  ${props => props.theme.mediaQueries.sm} {
    display: none;
  }
  opacity: ${props => props.expanded ? 1 : 0}
`

export const StyledRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-left: auto;
`

export const StyledImage = styled.img`
  height: 2rem;
  ${props => props.theme.mediaQueries.sm} {
    height: 3rem;
  }
`
