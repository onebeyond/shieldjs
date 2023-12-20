import React, { useState } from 'react'
import {
  StyledDesktopNav, StyledMobileNav,
  StyledNav, StyledMobileNavMenu, StyledImage, StyledRightContainer
} from '@/components/NavBar/Navbar.styles'
import shieldjsLogo from '@/assets/shieldjs.svg'
import { Link } from 'react-router-dom'
import { NavBarItems } from './components/NavBarItems/NavBarItems'
import { HamburguerMenu } from './components/HamburguerMenu/HamburguerMenu'
import { LanguageSelector } from './components/LanguageSelector'

export const NavBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false)

  const handleToggleMenu = () => {
    setExpanded(!expanded)
  }

  return (
    <StyledNav>

        <Link to="/">
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

      <StyledRightContainer>
        <LanguageSelector />
      </StyledRightContainer>

    </StyledNav>
  )
}
