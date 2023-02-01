---
to: src/components<%= path %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.stories.tsx
---

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>';

export default {
  title: 'components/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>>

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>> = (args) => <<%= h.changeCase.pascal(name) %> {...args} />

export const Default<%= h.changeCase.pascal(name) %> = Template.bind({})
Default<%= h.changeCase.pascal(name) %>.args = {
  children: 'Default <%= h.changeCase.pascal(name) %>'
}
