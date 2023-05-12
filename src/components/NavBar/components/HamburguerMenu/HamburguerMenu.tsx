import React from 'react'

import { StyledHamburguerMenu } from './HamburguerMenu.styles'

interface HamburguerMenuProps {
  expanded: boolean
  onClick: () => void
}

export const HamburguerMenu: React.FC<HamburguerMenuProps> = ({ expanded, onClick }) => {
  return (
    <StyledHamburguerMenu onClick={onClick} expanded={expanded}>
      <li className="bar1"></li>
      <li className="bar2"></li>
      <li className="bar3"></li>
    </StyledHamburguerMenu>
  )
}
