import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import App from './App'

import { MemoryRouter } from 'react-router-dom'

test('<App />', async () => {
  render(<App />, { wrapper: MemoryRouter })
  expect(await screen.findByText('MSWUser')).toBeInTheDocument()
})
