import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavItem } from './NavBarItems.styles'

export const NavBarItems: React.FC = () => {
  return (<>
    <StyledNavItem>
      <Link to="/about">
        Docs
      </Link>
    </StyledNavItem>
    <StyledNavItem>
      <Link to="/about">
        Solutions
      </Link>
    </StyledNavItem>
    <StyledNavItem>
      <Link to="/about">
        About Us
      </Link>
    </StyledNavItem>
  </>)
}
