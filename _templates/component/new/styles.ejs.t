---
to: src/components<%= path %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.styles.tsx
---

import styled from 'styled-components'

import { <%= h.changeCase.pascal(name) %>Props } from './<%= h.changeCase.pascal(name) %>'

export const Styled<%= h.changeCase.pascal(name) %> = styled.div<<%= h.changeCase.pascal(name) %>Props>`
  padding: '10px';
  background-color: ${(props) => (props.color ? 'props.color' : 'red')};
`
