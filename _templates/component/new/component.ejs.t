---
to: src/components<%= path %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---

import React from 'react';
import { Styled<%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>.styles';

export interface <%= h.changeCase.pascal(name) %>Props {
  children?: React.ReactNode;
}

export const <%= h.changeCase.pascal(name) %>: React.FC<<%= h.changeCase.pascal(name) %>Props> = ({ children, ...props }) => {
  return (
    <Styled<%= h.changeCase.pascal(name) %> {...props}>
      {children}
    </Styled<%= h.changeCase.pascal(name) %>>
  );
};

export default <%= h.changeCase.pascal(name) %>;