import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Technologies } from './Technologies'

test('renders Technologies component', () => {
  const technologiesComponent = render(
    <Technologies />
  )
  const iconsAlt = ['Vite Logo', 'React Logo', 'Typescript Logo', 'Playwright Logo', 'Hygen Logo', 'Stitches Logo']
  const icons = technologiesComponent.getAllByRole('img').map((icon) => icon.getAttribute('alt'))
  expect(screen.getByText('Which technologies do we use?')).toBeInTheDocument()
  expect(screen.getByText('We provide the latest technology stack to make the best product')).toBeInTheDocument()
  expect(icons).toHaveLength(7)
  expect(icons).toEqual(iconsAlt)
})
