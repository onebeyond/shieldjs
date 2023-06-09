import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import Footer from './Footer'

test('renders Hero component', () => {
  render(
    <Footer />
  )
  expect(screen.getByText('Shield.js')).toBeInTheDocument()
  expect(screen.getByText('Since 2023 - One Beyond')).toBeInTheDocument()
  expect(screen.getByText('Contact us')).toBeInTheDocument()
  expect(screen.getByAltText('one-beyond')).toBeInTheDocument()
  expect(screen.getByTestId('slackLink')).toHaveAttribute('href', 'https://github.com/onebeyond/shieldjs')
})
