---
to: src/components<%= path %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.test.tsx
---

import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>';
import { Default<%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>.stories';

describe('<%= h.changeCase.pascal(name) %> test', () => {
  test('Default <%= h.changeCase.pascal(name) %>', async () => {
    render(<<%= h.changeCase.pascal(name) %> {...Default<%= h.changeCase.pascal(name) %>.args} />);
    expect(await screen.findByText('Default <%= h.changeCase.pascal(name) %>')).toBeInTheDocument();
  });
});
