import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Button } from './Button'
import { LargeButton, PrimaryButton, SecondaryButton, SmallButton } from './Button.stories'

describe('Button test', () => {
  test('Primary button', async () => {
    render(<Button {...PrimaryButton.args}/>)
    expect(await screen.findByText('Primary Button')).toBeInTheDocument()
  })
  test('Secondary button', async () => {
    render(<Button {...SecondaryButton.args}/>)
    expect(await screen.findByText('Secondary Button')).toBeInTheDocument()
  })
  test('Small button', async () => {
    render(<Button {...SmallButton.args}/>)
    expect(await screen.findByText('Small Button')).toBeInTheDocument()
  })
  test('Large button', async () => {
    render(<Button {...LargeButton.args}/>)
    expect(await screen.findByText('Large Button')).toBeInTheDocument()
  })
})
