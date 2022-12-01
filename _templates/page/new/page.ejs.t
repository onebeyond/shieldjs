---
to: src/pages<%= path %>/<%= h.changeCase.lower(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---

import React from 'react';
import { Styled<%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>.styles';

export interface <%= h.changeCase.pascal(name) %>Props {
  primary?: boolean;
  children?: React.ReactNode;
}

export const <%= h.changeCase.pascal(name) %>: React.FC<<%= h.changeCase.pascal(name) %>Props> = ({ primary, children, ...props }) => {
  return (
    <Styled<%= h.changeCase.pascal(name) %> primary {...props}>
      {children}
    </Styled<%= h.changeCase.pascal(name) %>>
  );
};

export default <%= h.changeCase.pascal(name) %>;
