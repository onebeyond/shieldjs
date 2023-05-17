import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavItem } from './NavBarItems.styles'

export const NavBarItems: React.FC = () => {
  const menuItems = [
    { name: 'Docs', path: '/' },
    { name: 'Solutions', path: '/' },
    { name: 'Fetch Example', path: '/fetch-example' },
    { name: 'About Us', path: '/about' }
  ]
  return (
    <>
      {menuItems.map((item, index) => (
        <StyledNavItem key={index}>
          <Link to={item.path}>
            {item.name}
          </Link>
        </StyledNavItem>
      ))}
    </>
  )
}
