import { styled } from '@/stitches.config'

export const StyledHamburguerMenu = styled('ul', {
  display: 'block',
  cursor: 'pointer',
  '& li': {
    listStyle: 'none',
    width: '35px',
    height: '3px',
    backgroundColor: 'white',
    margin: '6px 0',
    transition: '0.4s'
  },
  variants: {
    expanded: {
      true: {
        '& .bar1': {
          WebkitTransform: 'rotate(-45deg) translate(-6px, 6px)',
          transform: 'rotate(-45deg) translate(-6px, 6px)'
        },

        '& .bar2': {
          opacity: 0
        },

        '& .bar3': {
          WebkitTransform: 'rotate(45deg) translate(-6px, -8px)',
          transform: 'rotate(45deg) translate(-6px, -8px)'
        }
      }
    }
  }

})
