import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Hero } from './Hero'

test('renders Hero component', () => {
  render(
    <Hero />
  )
  expect(screen.getByText('Shield.js')).toBeInTheDocument()
  expect(screen.getByText('The new frontend project by One Beyond')).toBeInTheDocument()
  expect(screen.getByText('From developers, to developers. Make the beginning easier with all daytools installed in one place.')).toBeInTheDocument()
  expect(screen.getByText('Start now')).toBeInTheDocument()
  expect(screen.getByRole('img')).toBeInTheDocument()
  expect(screen.getByAltText('ShieldJS logo')).toBeInTheDocument()
})
