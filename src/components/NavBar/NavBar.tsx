import React, { useState } from 'react'
import {
  StyledDesktopNav, StyledMobileNav,
  StyledNav, StyledMobileNavMenu, StyledImage, StyledNavButton, StyledRightContainer
} from '@/components/NavBar/Navbar.styles'
import shieldjsLogo from '@/assets/shieldjs.svg'
import { Link } from 'react-router-dom'
import { NavBarItems } from './components/NavBarItems/NavBarItems'
import { HamburguerMenu } from './components/HamburguerMenu/HamburguerMenu'
import { LanguageSelector } from './components/LanguageSelector'
import { useTranslation } from 'react-i18next'

export const NavBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false)
  const { t } = useTranslation('navBar')

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
        <StyledNavButton>
          {t('startButton')}
        </StyledNavButton>
      </StyledRightContainer>

    </StyledNav>
  )
}
