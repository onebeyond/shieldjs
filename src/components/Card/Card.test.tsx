import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Card } from './Card'

test('renders Card component', () => {
  render(
    <Card image="https://rickandmortyapi.com/api/character/avatar/1.jpeg">
      <h2>Rick Sanchez</h2>
    </Card>
  )
  const image = screen.getByRole('img')
  const title = screen.getByText(/Rick Sanchez/i)
  expect(image).toBeInTheDocument()
  expect(title).toBeInTheDocument()
})
