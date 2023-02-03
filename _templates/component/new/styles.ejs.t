---
to: src/components<%= path %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.styles.tsx
---

import { styled } from '@/stitches.config'

export const Styled<%= h.changeCase.pascal(name) %> = styled.div<<%= h.changeCase.pascal(name) %>Props>`
  padding: '10px';
  variants: {
    color: {
      primary: {
        backgroundColor: 'red'
      },
      secondary: 'blue'
    }
  },
  defaultVariants: {
    color: 'primary
  }
`
