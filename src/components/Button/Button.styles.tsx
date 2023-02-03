import { styled } from '@/stitches.config'

export const StyledButton = styled('button', {
  border: 1,
  lineHeight: 1,
  fontSize: '15px',
  cursor: 'pointer',
  fontWeight: 700,
  br: '3px',
  display: 'inline-block',
  p: '14px 30px 16px',
  color: '$white',
  backgroundColor: '#1b116e',
  opacity: 1,
  '&:hover': {
    backgroundColor: '#6bedb5'
  },
  '&:active': {
    border: 'solid 2px #1b116e',
    p: '12px 28px 14px'
  },
  variants: {
    size: {
      small: {
        p: '7px 25px 8px',
        '&:active': '5px 23px 6px'
      },
      medium: {
        p: '9px 30px 11px',
        '&:active': '7px 28px 9px'
      }
    },
    primary: {
      true: {
        color: '#1b116e',
        backgroundColor: '#6bedb5',
        '&:hover': '#55bd90'
      }
    },
    disabled: {
      true: {
        opacity: 0.5
      }
    }
  }
})
