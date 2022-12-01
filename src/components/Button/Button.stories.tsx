// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  primary: true,
  children: 'Primary Button'
}

const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  children: 'Secondary Button'
}

const LargeButton = Template.bind({})
LargeButton.args = {
  size: 'large',
  children: 'Large Button'
}

const SmallButton = Template.bind({})
SmallButton.args = {
  size: 'small',
  children: 'Small Button'
}

export { PrimaryButton, SecondaryButton, LargeButton, SmallButton }
