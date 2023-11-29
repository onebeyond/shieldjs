import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Card } from './Card'
import theme from '@/styled.config'
import { ThemeProvider } from 'styled-components'

test('renders Card component', () => {
  render(
    <ThemeProvider theme={theme}>
     <Card image="https://rickandmortyapi.com/api/character/avatar/1.jpeg">
      <h2>Rick Sanchez</h2>
    </Card>
   </ThemeProvider>
  )
  const image = screen.getByRole('img')
  const title = screen.getByText(/Rick Sanchez/i)
  expect(image).toBeInTheDocument()
  expect(title).toBeInTheDocument()
})
