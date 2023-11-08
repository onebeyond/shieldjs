---
to: src/components<%= path %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.styles.tsx
---

import styled from 'styled-components'

export const Styled<%= h.changeCase.pascal(name) %> = styled.div`
  display: flex;
  padding: 10px;
`
