import React from 'react'

import { StyledButton } from './Button.styles'

export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: 'small' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ size, children, onClick, ...props }) => {
  return (
      <StyledButton type="button" onClick={onClick} {...props}>
          {children}
      </StyledButton>
  )
}

export default Button
