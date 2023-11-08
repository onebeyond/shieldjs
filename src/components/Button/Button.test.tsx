import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Button } from './Button'
import { LargeButton, SmallButton } from './Button.stories'

describe('Button test', () => {
  test('Small button', async () => {
    render(<Button {...SmallButton.args}/>)
    expect(await screen.findByText('Small Button')).toBeInTheDocument()
  })
  test('Large button', async () => {
    render(<Button {...LargeButton.args}/>)
    expect(await screen.findByText('Large Button')).toBeInTheDocument()
  })
})
