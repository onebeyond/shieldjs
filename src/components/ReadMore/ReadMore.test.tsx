import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { ReadMore } from './ReadMore'

test('renders Read More', () => {
  render(<ReadMore />)
  const titleElement = screen.getByText(/Read More/i)
  expect(titleElement).toBeInTheDocument()
})
