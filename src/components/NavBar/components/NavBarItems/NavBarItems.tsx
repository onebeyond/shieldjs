import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavItem } from './NavBarItems.styles'
import { useTranslation } from 'react-i18next'

const MENU_ITEMS = [
  { name: 'home', path: '/' },
  { name: 'fetchExample', path: '/fetch-example' },
  { name: 'aboutUs', path: '/about' }
]

export const NavBarItems: React.FC = () => {
  const { t } = useTranslation('navBarItems')

  return (
    <>
      {MENU_ITEMS.map((item, index) => (
        <StyledNavItem key={index}>
          <Link to={item.path}>
            {t(item.name)}
          </Link>
        </StyledNavItem>
      ))}
    </>
  )
}
