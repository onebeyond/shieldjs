import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavItem } from './NavBarItems.styles'

export const NavBarItems: React.FC = () => {
  return (<>
    <StyledNavItem>
      <Link to="/">
        Docs
      </Link>
    </StyledNavItem>
    <StyledNavItem>
      <Link to="/">
        Solutions
      </Link>
    </StyledNavItem>
    <StyledNavItem>
      <Link to="/fetch-example">
        Fetch Example
      </Link>
    </StyledNavItem>
    <StyledNavItem>
      <Link to="/about">
        About Us
      </Link>
    </StyledNavItem>
  </>)
}
