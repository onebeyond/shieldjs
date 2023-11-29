import React from 'react'

import { StyledButton } from './Button.styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'large'
}

export const Button: React.FC<ButtonProps> = ({ size, disabled, children, onClick, ...props }) => {
  return (
      <StyledButton type="button" onClick={onClick} disabled={disabled} size={size} {...props}>
          {children}
      </StyledButton>
  )
}

export default Button
