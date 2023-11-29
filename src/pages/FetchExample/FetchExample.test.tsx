import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { MemoryRouter } from 'react-router-dom'
import FetchExample from '@/pages/FetchExample/FetchExample'
import theme from '@/styled.config'
import { ThemeProvider } from 'styled-components'

test('<FetchExample />', async () => {
  render(
    <ThemeProvider theme={theme}>
      <FetchExample />
    </ThemeProvider>, { wrapper: MemoryRouter })
  expect(await screen.findByText('Vite + React = Shield.js')).toBeInTheDocument()
})
