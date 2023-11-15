import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { ReadMore } from './ReadMore'
import theme from '@/styled.config'
import { ThemeProvider } from 'styled-components'

test('renders Read More', () => {
  render(
    <ThemeProvider theme={theme}>
      <ReadMore />
   </ThemeProvider>
  )
  const titleElement = screen.getByText(/Read More/i)
  expect(titleElement).toBeInTheDocument()
})
