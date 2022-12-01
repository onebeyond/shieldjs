import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import App from './App'

test('<App />', async () => {
  render(<App />)
  expect(await screen.findByText('MSWUser')).toBeInTheDocument()
})
