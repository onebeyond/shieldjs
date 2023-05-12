import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { MemoryRouter } from 'react-router-dom'
import FetchExample from '@/pages/FetchExample/FetchExample'

test('<FetchExample />', async () => {
  render(<FetchExample />, { wrapper: MemoryRouter })
  expect(await screen.findByText('Vite + React = Shield.js')).toBeInTheDocument()
})
