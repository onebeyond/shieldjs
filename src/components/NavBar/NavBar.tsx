import React, { useState } from 'react'
import {
  StyledDesktopNav, StyledMobileNav,
  StyledNav, StyledMobileNavMenu, StyledImage, StyledNavButton
} from '@/components/NavBar/Navbar.styles'
import shieldjsLogo from '@/assets/shieldjs.svg'
import { Link } from 'react-router-dom'
import { NavBarItems } from './components/NavBarItems/NavBarItems'
import { HamburguerMenu } from './components/HamburguerMenu/HamburguerMenu'

export const NavBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false)

  const handleToggleMenu = () => {
    setExpanded(!expanded)
  }

  return (
    <StyledNav>
      <Link to="/about">
        <StyledImage src={shieldjsLogo} alt="ShieldJS logo" />
      </Link>
      <StyledDesktopNav>
        <NavBarItems />
      </StyledDesktopNav>

      <StyledMobileNav>
        <HamburguerMenu expanded={expanded} onClick={handleToggleMenu} />
        <StyledMobileNavMenu expanded={expanded}>
          <NavBarItems />
        </StyledMobileNavMenu>
      </StyledMobileNav>

      <StyledNavButton>
        Start now
      </StyledNavButton>
    </StyledNav>
  )
}
