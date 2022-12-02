import React from 'react'

import { StyledButton } from './Button.styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
}

export const Button: React.FC<ButtonProps> = ({ size, primary, disabled, children, onClick, ...props }) => {
  return (
      <StyledButton type="button" onClick={onClick} primary={primary} disabled={disabled} size={size} {...props}>
          {children}
      </StyledButton>
  )
}

export default Button
